import React, { forwardRef } from "react";
import p from "prop-types";
export const MoveDiagonal = forwardRef(function MoveDiagonal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="13 5 19 5 19 11"></polyline>
      <polyline points="11 19 5 19 5 13"></polyline>
      <line x1="19" y1="5" x2="5" y2="19"></line>
    </svg>
  );
});

MoveDiagonal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MoveDiagonal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MoveDiagonal.displayName = "MoveDiagonal";
