import React, { forwardRef } from "react";
import p from "prop-types";
export const LogIn = forwardRef(function LogIn(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"></path>
      <polyline points="10 17 15 12 10 7"></polyline>
      <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
  );
});

LogIn.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LogIn.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LogIn.displayName = "LogIn";
