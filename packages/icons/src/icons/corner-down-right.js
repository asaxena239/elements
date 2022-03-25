import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerDownRight = forwardRef(function CornerDownRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="15 10 20 15 15 20"></polyline>
      <path d="M4 4v7a4 4 0 004 4h12"></path>
    </svg>
  );
});

CornerDownRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerDownRight.displayName = "CornerDownRight";
