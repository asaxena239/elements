import React, { forwardRef } from "react";
import p from "prop-types";
export const AlertCircle = forwardRef(function AlertCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
});

AlertCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlertCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlertCircle.displayName = "AlertCircle";
