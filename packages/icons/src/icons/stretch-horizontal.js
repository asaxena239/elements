import React, { forwardRef } from "react";
import p from "prop-types";
export const StretchHorizontal = forwardRef(function StretchHorizontal(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="4" width="20" height="6" rx="2"></rect>
      <rect x="2" y="14" width="20" height="6" rx="2"></rect>
    </svg>
  );
});

StretchHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

StretchHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

StretchHorizontal.displayName = "StretchHorizontal";
