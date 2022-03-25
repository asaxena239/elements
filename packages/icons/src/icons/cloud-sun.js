import React, { forwardRef } from "react";
import p from "prop-types";
export const CloudSun = forwardRef(function CloudSun(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2v2"></path>
      <path d="M5.22 5.22l1.42 1.42"></path>
      <path d="M20 12h2"></path>
      <path d="M15.97 12.5A4 4 0 009.5 8.88"></path>
      <path d="M13.63 22A3.3 3.3 0 0017 18.79a3.3 3.3 0 00-3.38-3.22h-1.34A5.23 5.23 0 007.25 12 5.13 5.13 0 002 17c0 2.76 2.35 5 5.25 5h6.38z"></path>
      <path d="M17.36 6.64l1.42-1.42"></path>
    </svg>
  );
});

CloudSun.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CloudSun.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CloudSun.displayName = "CloudSun";
