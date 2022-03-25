import React, { forwardRef } from "react";
import p from "prop-types";
export const BatteryCharging = forwardRef(function BatteryCharging(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 7h2a2 2 0 012 2v6a2 2 0 01-2 2h-3"></path>
      <path d="M7 7H4a2 2 0 00-2 2v6a2 2 0 002 2h2"></path>
      <polyline points="11 7 8 12 12 12 9 17"></polyline>
      <line x1="22" x2="22" y1="11" y2="13"></line>
    </svg>
  );
});

BatteryCharging.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BatteryCharging.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BatteryCharging.displayName = "BatteryCharging";
