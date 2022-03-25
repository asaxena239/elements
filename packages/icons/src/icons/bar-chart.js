import React, { forwardRef } from "react";
import p from "prop-types";
export const BarChart = forwardRef(function BarChart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  );
});

BarChart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BarChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BarChart.displayName = "BarChart";
