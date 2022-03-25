import React, { forwardRef } from "react";
import p from "prop-types";
export const FunctionSquare = forwardRef(function FunctionSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"></path>
      <path d="M9 11.2h5.7"></path>
    </svg>
  );
});

FunctionSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FunctionSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FunctionSquare.displayName = "FunctionSquare";
