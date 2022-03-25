import React, { forwardRef } from "react";
import p from "prop-types";
export const Compass = forwardRef(function Compass(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  );
});

Compass.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Compass.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Compass.displayName = "Compass";
