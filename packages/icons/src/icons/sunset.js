import React, { forwardRef } from "react";
import p from "prop-types";
export const Sunset = forwardRef(function Sunset(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 10V2"></path>
      <path d="M5.2 11.2l1.4 1.4"></path>
      <path d="M2 18h2"></path>
      <path d="M20 18h2"></path>
      <path d="M17.4 12.6l1.4-1.4"></path>
      <path d="M22 22H2"></path>
      <path d="M16 6l-4 4-4-4"></path>
      <path d="M16 18a4 4 0 00-8 0"></path>
    </svg>
  );
});

Sunset.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Sunset.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Sunset.displayName = "Sunset";
