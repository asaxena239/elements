import React, { forwardRef } from "react";
import p from "prop-types";
export const ThermometerSun = forwardRef(function ThermometerSun(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 9a4 4 0 00-2 7.5"></path>
      <path d="M12 3v2"></path>
      <path d="M6.6 18.4l-1.4 1.4"></path>
      <path d="M18 2a2 2 0 012 2v10.5a4 4 0 11-4 0V4c0-1.1.9-2 2-2z"></path>
      <path d="M4 13H2"></path>
      <path d="M6.6 7.6L5.2 6.2"></path>
    </svg>
  );
});

ThermometerSun.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ThermometerSun.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ThermometerSun.displayName = "ThermometerSun";
