import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerUpLeft = forwardRef(function CornerUpLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="9 14 4 9 9 4"></polyline>
      <path d="M20 20v-7a4 4 0 00-4-4H4"></path>
    </svg>
  );
});

CornerUpLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerUpLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerUpLeft.displayName = "CornerUpLeft";
