import React, { forwardRef } from "react";
import p from "prop-types";
export const Maximize = forwardRef(function Maximize(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path>
    </svg>
  );
});

Maximize.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Maximize.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Maximize.displayName = "Maximize";
