import React, { forwardRef } from "react";
import p from "prop-types";
export const HardHat = forwardRef(function HardHat(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z"></path>
      <path d="M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5"></path>
      <path d="M4 15v-3a6 6 0 016-6h0"></path>
      <path d="M14 6h0a6 6 0 016 6v3"></path>
    </svg>
  );
});

HardHat.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

HardHat.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

HardHat.displayName = "HardHat";
