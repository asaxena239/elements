import React, { forwardRef } from "react";
import p from "prop-types";
export const SeparatorVertical = forwardRef(function SeparatorVertical(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="12" y1="3" x2="12" y2="21"></line>
      <polyline points="8 8 4 12 8 16"></polyline>
      <polyline points="16 16 20 12 16 8"></polyline>
    </svg>
  );
});

SeparatorVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SeparatorVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SeparatorVertical.displayName = "SeparatorVertical";
