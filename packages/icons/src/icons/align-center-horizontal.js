import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignCenterHorizontal = forwardRef(function AlignCenterHorizontal(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 12h20"></path>
      <path d="M10 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4"></path>
      <path d="M10 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4"></path>
      <path d="M20 16v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1"></path>
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 012 2v1"></path>
    </svg>
  );
});

AlignCenterHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignCenterHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignCenterHorizontal.displayName = "AlignCenterHorizontal";
