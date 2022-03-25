import React, { forwardRef } from "react";
import p from "prop-types";
export const MoveVertical = forwardRef(function MoveVertical(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="8 18 12 22 16 18"></polyline>
      <polyline points="8 6 12 2 16 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
  );
});

MoveVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MoveVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MoveVertical.displayName = "MoveVertical";
