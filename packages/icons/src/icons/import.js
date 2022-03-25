import React, { forwardRef } from "react";
import p from "prop-types";
export const Import = forwardRef(function Import(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 3v12"></path>
      <path d="M8 11l4 4 4-4"></path>
      <path d="M8 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-4"></path>
    </svg>
  );
});

Import.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Import.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Import.displayName = "Import";
