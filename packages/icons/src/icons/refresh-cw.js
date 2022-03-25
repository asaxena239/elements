import React, { forwardRef } from "react";
import p from "prop-types";
export const RefreshCw = forwardRef(function RefreshCw(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 2v6h-6"></path>
      <path d="M3 12a9 9 0 0115-6.7L21 8"></path>
      <path d="M3 22v-6h6"></path>
      <path d="M21 12a9 9 0 01-15 6.7L3 16"></path>
    </svg>
  );
});

RefreshCw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RefreshCw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RefreshCw.displayName = "RefreshCw";
