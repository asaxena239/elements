import React, { forwardRef } from "react";
import p from "prop-types";
export const Gauge = forwardRef(function Gauge(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 15l3.5-3.5"></path>
      <path d="M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4"></path>
    </svg>
  );
});

Gauge.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Gauge.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Gauge.displayName = "Gauge";
