import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowDown = forwardRef(function ArrowDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  );
});

ArrowDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowDown.displayName = "ArrowDown";
