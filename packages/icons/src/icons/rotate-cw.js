import React, { forwardRef } from "react";
import p from "prop-types";
export const RotateCw = forwardRef(function RotateCw(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 2v6h-6"></path>
      <path d="M21 13a9 9 0 11-3-7.7L21 8"></path>
    </svg>
  );
});

RotateCw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RotateCw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RotateCw.displayName = "RotateCw";
