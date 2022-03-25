import React, { forwardRef } from "react";
import p from "prop-types";
export const BatteryMedium = forwardRef(function BatteryMedium(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
      <line x1="22" x2="22" y1="11" y2="13"></line>
      <line x1="6" x2="6" y1="10" y2="14"></line>
      <line x1="10" x2="10" y1="10" y2="14"></line>
    </svg>
  );
});

BatteryMedium.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BatteryMedium.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BatteryMedium.displayName = "BatteryMedium";