import React, { forwardRef } from "react";
import p from "prop-types";
export const HandMetal = forwardRef(function HandMetal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 12.5V10a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4"></path>
      <path d="M14 11V9a2 2 0 10-4 0v2"></path>
      <path d="M10 10.5V5a2 2 0 10-4 0v9"></path>
      <path d="M7 15l-1.76-1.76a2 2 0 00-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 008-8V7a2 2 0 10-4 0v5"></path>
    </svg>
  );
});

HandMetal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

HandMetal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

HandMetal.displayName = "HandMetal";
