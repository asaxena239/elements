import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerUpRight = forwardRef(function CornerUpRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="15 14 20 9 15 4"></polyline>
      <path d="M4 20v-7a4 4 0 014-4h12"></path>
    </svg>
  );
});

CornerUpRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerUpRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerUpRight.displayName = "CornerUpRight";
