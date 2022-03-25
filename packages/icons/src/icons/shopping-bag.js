import React, { forwardRef } from "react";
import p from "prop-types";
export const ShoppingBag = forwardRef(function ShoppingBag(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 01-8 0"></path>
    </svg>
  );
});

ShoppingBag.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ShoppingBag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ShoppingBag.displayName = "ShoppingBag";
