import React, { forwardRef } from "react";
import p from "prop-types";
export const PieChart = forwardRef(function PieChart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21.21 15.89A10 10 0 118 2.83"></path>
      <path d="M22 12A10 10 0 0012 2v10z"></path>
    </svg>
  );
});

PieChart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PieChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PieChart.displayName = "PieChart";
