import React, { forwardRef } from "react";
import p from "prop-types";
export const Clock = forwardRef(function Clock(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
});

Clock.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Clock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Clock.displayName = "Clock";
