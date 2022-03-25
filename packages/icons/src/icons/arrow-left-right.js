import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowLeftRight = forwardRef(function ArrowLeftRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="17 11 21 7 17 3"></polyline>
      <line x1="21" y1="7" x2="9" y2="7"></line>
      <polyline points="7 21 3 17 7 13"></polyline>
      <line x1="15" y1="17" x2="3" y2="17"></line>
    </svg>
  );
});

ArrowLeftRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowLeftRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowLeftRight.displayName = "ArrowLeftRight";
