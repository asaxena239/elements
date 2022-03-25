import React, { forwardRef } from "react";
import p from "prop-types";
export const Pocket = forwardRef(function Pocket(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z"></path>
      <polyline points="8 10 12 14 16 10"></polyline>
    </svg>
  );
});

Pocket.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Pocket.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Pocket.displayName = "Pocket";
