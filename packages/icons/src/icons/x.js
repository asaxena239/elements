import React, { forwardRef } from "react";
import p from "prop-types";
export const X = forwardRef(function X(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
});

X.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

X.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

X.displayName = "X";
