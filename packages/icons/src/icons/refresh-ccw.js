import React, { forwardRef } from "react";
import p from "prop-types";
export const RefreshCcw = forwardRef(function RefreshCcw(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 2v6h6"></path>
      <path d="M21 12A9 9 0 006 5.3L3 8"></path>
      <path d="M21 22v-6h-6"></path>
      <path d="M3 12a9 9 0 0015 6.7l3-2.7"></path>
    </svg>
  );
});

RefreshCcw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RefreshCcw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RefreshCcw.displayName = "RefreshCcw";
