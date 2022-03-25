import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerLeftUp = forwardRef(function CornerLeftUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="14 9 9 4 4 9"></polyline>
      <path d="M20 20h-7a4 4 0 01-4-4V4"></path>
    </svg>
  );
});

CornerLeftUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerLeftUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerLeftUp.displayName = "CornerLeftUp";
