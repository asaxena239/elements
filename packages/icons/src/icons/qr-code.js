import React, { forwardRef } from "react";
import p from "prop-types";
export const QrCode = forwardRef(function QrCode(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="2" width="8" height="8"></rect>
      <path d="M6 6h.01"></path>
      <rect x="14" y="2" width="8" height="8"></rect>
      <path d="M18 6h.01"></path>
      <rect x="2" y="14" width="8" height="8"></rect>
      <path d="M6 18h.01"></path>
      <path d="M14 14h.01"></path>
      <path d="M18 18h.01"></path>
      <path d="M18 22h4v-4"></path>
      <path d="M14 18v4"></path>
      <path d="M22 14h-4"></path>
    </svg>
  );
});

QrCode.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

QrCode.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

QrCode.displayName = "QrCode";
