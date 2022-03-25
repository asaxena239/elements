import React, { forwardRef } from "react";
import p from "prop-types";
export const Wallet = forwardRef(function Wallet(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"></path>
      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
      <path d="M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
    </svg>
  );
});

Wallet.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Wallet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Wallet.displayName = "Wallet";
