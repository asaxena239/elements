import React, { forwardRef } from "react";
import p from "prop-types";
export const Laptop2 = forwardRef(function Laptop2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
      <line x1="2" y1="20" x2="22" y2="20"></line>
    </svg>
  );
});

Laptop2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Laptop2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Laptop2.displayName = "Laptop2";
