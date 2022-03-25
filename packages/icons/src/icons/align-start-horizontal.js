import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignStartHorizontal = forwardRef(function AlignStartHorizontal(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="4" y="6" width="6" height="16" rx="2"></rect>
      <rect x="14" y="6" width="6" height="9" rx="2"></rect>
      <path d="M22 2H2"></path>
    </svg>
  );
});

AlignStartHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignStartHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignStartHorizontal.displayName = "AlignStartHorizontal";
