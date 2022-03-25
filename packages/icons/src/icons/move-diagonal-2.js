import React, { forwardRef } from "react";
import p from "prop-types";
export const MoveDiagonal2 = forwardRef(function MoveDiagonal2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="5 11 5 5 11 5"></polyline>
      <polyline points="19 13 19 19 13 19"></polyline>
      <line x1="5" y1="5" x2="19" y2="19"></line>
    </svg>
  );
});

MoveDiagonal2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MoveDiagonal2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MoveDiagonal2.displayName = "MoveDiagonal2";
