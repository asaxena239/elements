import React, { forwardRef } from "react";
import p from "prop-types";
export const Repeat1 = forwardRef(function Repeat1(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 2l4 4-4 4"></path>
      <path d="M3 11v-1a4 4 0 014-4h14"></path>
      <path d="M7 22l-4-4 4-4"></path>
      <path d="M21 13v1a4 4 0 01-4 4H3"></path>
      <path d="M11 10h1v4"></path>
    </svg>
  );
});

Repeat1.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Repeat1.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Repeat1.displayName = "Repeat1";
