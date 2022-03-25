import React, { forwardRef } from "react";
import p from "prop-types";
export const XCircle = forwardRef(function XCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>
  );
});

XCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

XCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

XCircle.displayName = "XCircle";
