import React, { forwardRef } from "react";
import p from "prop-types";
export const Lasso = forwardRef(function Lasso(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 22a5 5 0 01-2-4"></path>
      <path d="M3.3 14A6.8 6.8 0 012 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 01-5-1"></path>
      <path d="M5 18a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
  );
});

Lasso.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Lasso.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Lasso.displayName = "Lasso";
