import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignEndHorizontal = forwardRef(function AlignEndHorizontal(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="4" y="2" width="6" height="16" rx="2"></rect>
      <rect x="14" y="9" width="6" height="9" rx="2"></rect>
      <path d="M22 22H2"></path>
    </svg>
  );
});

AlignEndHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignEndHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignEndHorizontal.displayName = "AlignEndHorizontal";
