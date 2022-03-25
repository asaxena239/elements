import React, { forwardRef } from "react";
import p from "prop-types";
export const RotateCcw = forwardRef(function RotateCcw(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 2v6h6"></path>
      <path d="M3 13a9 9 0 103-7.7L3 8"></path>
    </svg>
  );
});

RotateCcw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RotateCcw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RotateCcw.displayName = "RotateCcw";
