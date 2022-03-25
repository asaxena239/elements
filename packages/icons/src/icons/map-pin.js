import React, { forwardRef } from "react";
import p from "prop-types";
export const MapPin = forwardRef(function MapPin(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
});

MapPin.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MapPin.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MapPin.displayName = "MapPin";
