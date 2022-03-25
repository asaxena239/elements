import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowUpCircle = forwardRef(function ArrowUpCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="16 12 12 8 8 12"></polyline>
      <line x1="12" y1="16" x2="12" y2="8"></line>
    </svg>
  );
});

ArrowUpCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowUpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowUpCircle.displayName = "ArrowUpCircle";
