import React, { forwardRef } from "react";
import p from "prop-types";
export const Haze = forwardRef(function Haze(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5.2 6.2l1.4 1.4"></path>
      <path d="M2 13h2"></path>
      <path d="M20 13h2"></path>
      <path d="M17.4 7.6l1.4-1.4"></path>
      <path d="M22 17H2"></path>
      <path d="M22 21H2"></path>
      <path d="M16 13a4 4 0 00-8 0"></path>
      <path d="M12 5V2.5"></path>
    </svg>
  );
});

Haze.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Haze.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Haze.displayName = "Haze";
