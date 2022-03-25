import React, { forwardRef } from "react";
import p from "prop-types";
export const LogOut = forwardRef(function LogOut(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );
});

LogOut.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LogOut.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LogOut.displayName = "LogOut";
