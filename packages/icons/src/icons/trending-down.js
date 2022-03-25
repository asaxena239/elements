import React, { forwardRef } from "react";
import p from "prop-types";
export const TrendingDown = forwardRef(function TrendingDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
      <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
  );
});

TrendingDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TrendingDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TrendingDown.displayName = "TrendingDown";
