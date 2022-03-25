import React, { forwardRef } from "react";
import p from "prop-types";
export const WrapText = forwardRef(function WrapText(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M3 12h15a3 3 0 110 6h-4"></path>
      <polyline points="16 16 14 18 16 20"></polyline>
      <line x1="3" y1="18" x2="10" y2="18"></line>
    </svg>
  );
});

WrapText.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

WrapText.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

WrapText.displayName = "WrapText";
