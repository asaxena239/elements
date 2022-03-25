import React, { forwardRef } from "react";
import p from "prop-types";
export const Baseline = forwardRef(function Baseline(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 20h16"></path>
      <path d="M6 16l6-12 6 12"></path>
      <path d="M8 12h8"></path>
    </svg>
  );
});

Baseline.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Baseline.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Baseline.displayName = "Baseline";
