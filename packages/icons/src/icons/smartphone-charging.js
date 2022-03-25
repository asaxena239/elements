import React, { forwardRef } from "react";
import p from "prop-types";
export const SmartphoneCharging = forwardRef(function SmartphoneCharging(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <path d="M12.667 8L10 12h4l-2.667 4"></path>
    </svg>
  );
});

SmartphoneCharging.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SmartphoneCharging.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SmartphoneCharging.displayName = "SmartphoneCharging";
