import React, { forwardRef } from "react";
import p from "prop-types";
export const MoveHorizontal = forwardRef(function MoveHorizontal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="18 8 22 12 18 16"></polyline>
      <polyline points="6 8 2 12 6 16"></polyline>
      <line x1="2" y1="12" x2="22" y2="12"></line>
    </svg>
  );
});

MoveHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MoveHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MoveHorizontal.displayName = "MoveHorizontal";
