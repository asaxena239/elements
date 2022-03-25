import React, { forwardRef } from "react";
import p from "prop-types";
export const Thermometer = forwardRef(function Thermometer(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z"></path>
    </svg>
  );
});

Thermometer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Thermometer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Thermometer.displayName = "Thermometer";
