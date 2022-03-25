import React, { forwardRef } from "react";
import p from "prop-types";
export const SeparatorHorizontal = forwardRef(function SeparatorHorizontal(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <polyline points="8 8 12 4 16 8"></polyline>
      <polyline points="16 16 12 20 8 16"></polyline>
    </svg>
  );
});

SeparatorHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SeparatorHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SeparatorHorizontal.displayName = "SeparatorHorizontal";
