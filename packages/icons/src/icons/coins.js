import React, { forwardRef } from "react";
import p from "prop-types";
export const Coins = forwardRef(function Coins(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="8" cy="8" r="7"></circle>
      <path d="M19.5 9.94a7 7 0 11-9.56 9.56"></path>
      <path d="M7 6h1v4"></path>
      <path d="M17.3 14.3l.7.7-2.8 2.8"></path>
    </svg>
  );
});

Coins.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Coins.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Coins.displayName = "Coins";
