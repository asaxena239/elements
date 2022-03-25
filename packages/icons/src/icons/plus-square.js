import React, { forwardRef } from "react";
import p from "prop-types";
export const PlusSquare = forwardRef(function PlusSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
});

PlusSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PlusSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PlusSquare.displayName = "PlusSquare";
