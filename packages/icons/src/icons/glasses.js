import React, { forwardRef } from "react";
import p from "prop-types";
export const Glasses = forwardRef(function Glasses(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="6" cy="15" r="4"></circle>
      <circle cx="18" cy="15" r="4"></circle>
      <path d="M14 15a2 2 0 00-2-2 2 2 0 00-2 2"></path>
      <path d="M2.5 13L5 7c.7-1.3 1.4-2 3-2"></path>
      <path d="M21.5 13L19 7c-.7-1.3-1.5-2-3-2"></path>
    </svg>
  );
});

Glasses.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Glasses.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Glasses.displayName = "Glasses";
