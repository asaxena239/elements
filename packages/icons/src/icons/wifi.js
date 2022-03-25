import React, { forwardRef } from "react";
import p from "prop-types";
export const Wifi = forwardRef(function Wifi(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 13a10 10 0 0114 0"></path>
      <path d="M8.5 16.5a5 5 0 017 0"></path>
      <path d="M2 8.82a15 15 0 0120 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
});

Wifi.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Wifi.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Wifi.displayName = "Wifi";
