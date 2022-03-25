import React, { forwardRef } from "react";
import p from "prop-types";
export const Archive = forwardRef(function Archive(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 9v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9m16-5H4a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-10 9h4"></path>
    </svg>
  );
});

Archive.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Archive.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Archive.displayName = "Archive";
