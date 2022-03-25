import React, { forwardRef } from "react";
import p from "prop-types";
export const Figma = forwardRef(function Figma(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 110 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"></path>
    </svg>
  );
});

Figma.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Figma.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Figma.displayName = "Figma";
