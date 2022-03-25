import React, { forwardRef } from "react";
import p from "prop-types";
export const CheckCircle = forwardRef(function CheckCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
});

CheckCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CheckCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CheckCircle.displayName = "CheckCircle";
