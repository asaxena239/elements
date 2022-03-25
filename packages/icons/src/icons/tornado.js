import React, { forwardRef } from "react";
import p from "prop-types";
export const Tornado = forwardRef(function Tornado(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 4H3"></path>
      <path d="M18 8H6"></path>
      <path d="M19 12H9"></path>
      <path d="M16 16h-6"></path>
      <path d="M11 20H9"></path>
    </svg>
  );
});

Tornado.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tornado.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tornado.displayName = "Tornado";
