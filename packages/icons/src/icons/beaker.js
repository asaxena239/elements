import React, { forwardRef } from "react";
import p from "prop-types";
export const Beaker = forwardRef(function Beaker(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4.5 3h15"></path>
      <path d="M6 3v16a2 2 0 002 2h8a2 2 0 002-2V3"></path>
      <path d="M6 14h12"></path>
    </svg>
  );
});

Beaker.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Beaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Beaker.displayName = "Beaker";
