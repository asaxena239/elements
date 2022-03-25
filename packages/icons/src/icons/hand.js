import React, { forwardRef } from "react";
import p from "prop-types";
export const Hand = forwardRef(function Hand(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"></path>
      <path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"></path>
      <path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"></path>
      <path d="M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"></path>
    </svg>
  );
});

Hand.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Hand.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Hand.displayName = "Hand";
