import React, { forwardRef } from "react";
import p from "prop-types";
export const Pointer = forwardRef(function Pointer(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 14a8 8 0 01-8 8"></path>
      <path d="M18 11v-1a2 2 0 00-2-2v0a2 2 0 00-2 2v0"></path>
      <path d="M14 10V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1"></path>
      <path d="M10 9.5V4a2 2 0 00-2-2v0a2 2 0 00-2 2v10"></path>
      <path d="M18 11a2 2 0 114 0v3a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"></path>
    </svg>
  );
});

Pointer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Pointer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Pointer.displayName = "Pointer";
