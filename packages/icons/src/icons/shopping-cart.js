import React, { forwardRef } from "react";
import p from "prop-types";
export const ShoppingCart = forwardRef(function ShoppingCart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path>
    </svg>
  );
});

ShoppingCart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ShoppingCart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ShoppingCart.displayName = "ShoppingCart";
