import React, { forwardRef } from "react";
import p from "prop-types";
export const WifiOff = forwardRef(function WifiOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="2" y1="2" x2="22" y2="22"></line>
      <path d="M8.5 16.5a5 5 0 017 0"></path>
      <path d="M2 8.82a15 15 0 014.17-2.65"></path>
      <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"></path>
      <path d="M16.85 11.25a10 10 0 012.22 1.68"></path>
      <path d="M5 13a10 10 0 015.24-2.76"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
});

WifiOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

WifiOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

WifiOff.displayName = "WifiOff";
