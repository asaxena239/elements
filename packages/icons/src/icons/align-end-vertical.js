import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignEndVertical = forwardRef(function AlignEndVertical(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="4" width="16" height="6" rx="2"></rect>
      <rect x="9" y="14" width="9" height="6" rx="2"></rect>
      <path d="M22 22V2"></path>
    </svg>
  );
});

AlignEndVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignEndVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignEndVertical.displayName = "AlignEndVertical";
