import React, { forwardRef } from "react";
import p from "prop-types";
export const MinusSquare = forwardRef(function MinusSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
});

MinusSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MinusSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MinusSquare.displayName = "MinusSquare";
