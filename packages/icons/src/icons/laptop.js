import React, { forwardRef } from "react";
import p from "prop-types";
export const Laptop = forwardRef(function Laptop(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16"></path>
    </svg>
  );
});

Laptop.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Laptop.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Laptop.displayName = "Laptop";
