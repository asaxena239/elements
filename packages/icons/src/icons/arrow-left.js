import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowLeft = forwardRef(function ArrowLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );
});

ArrowLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowLeft.displayName = "ArrowLeft";
