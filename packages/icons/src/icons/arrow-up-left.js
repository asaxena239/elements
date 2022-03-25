import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowUpLeft = forwardRef(function ArrowUpLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="17" y1="17" x2="7" y2="7"></line>
      <polyline points="7 17 7 7 17 7"></polyline>
    </svg>
  );
});

ArrowUpLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowUpLeft.displayName = "ArrowUpLeft";
