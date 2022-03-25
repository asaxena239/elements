import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowDownRight = forwardRef(function ArrowDownRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
});

ArrowDownRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowDownRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowDownRight.displayName = "ArrowDownRight";
