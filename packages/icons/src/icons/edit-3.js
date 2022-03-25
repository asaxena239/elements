import React, { forwardRef } from "react";
import p from "prop-types";
export const Edit3 = forwardRef(function Edit3(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  );
});

Edit3.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Edit3.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Edit3.displayName = "Edit3";
