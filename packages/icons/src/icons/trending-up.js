import React, { forwardRef } from "react";
import p from "prop-types";
export const TrendingUp = forwardRef(function TrendingUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
});

TrendingUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TrendingUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TrendingUp.displayName = "TrendingUp";
