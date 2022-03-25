import React, { forwardRef } from "react";
import p from "prop-types";
export const XSquare = forwardRef(function XSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="9" x2="15" y2="15"></line>
      <line x1="15" y1="9" x2="9" y2="15"></line>
    </svg>
  );
});

XSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

XSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

XSquare.displayName = "XSquare";
