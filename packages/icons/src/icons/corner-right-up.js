import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerRightUp = forwardRef(function CornerRightUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="10 9 15 4 20 9"></polyline>
      <path d="M4 20h7a4 4 0 004-4V4"></path>
    </svg>
  );
});

CornerRightUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerRightUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerRightUp.displayName = "CornerRightUp";
