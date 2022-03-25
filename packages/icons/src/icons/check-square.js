import React, { forwardRef } from "react";
import p from "prop-types";
export const CheckSquare = forwardRef(function CheckSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
    </svg>
  );
});

CheckSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CheckSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CheckSquare.displayName = "CheckSquare";
