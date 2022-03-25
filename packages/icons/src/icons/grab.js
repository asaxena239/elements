import React, { forwardRef } from "react";
import p from "prop-types";
export const Grab = forwardRef(function Grab(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4"></path>
      <path d="M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2"></path>
      <path d="M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5"></path>
      <path d="M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0"></path>
      <path d="M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0"></path>
    </svg>
  );
});

Grab.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Grab.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Grab.displayName = "Grab";
