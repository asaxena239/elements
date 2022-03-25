import React, { forwardRef } from "react";
import p from "prop-types";
export const Scan = forwardRef(function Scan(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 7V5a2 2 0 012-2h2"></path>
      <path d="M17 3h2a2 2 0 012 2v2"></path>
      <path d="M21 17v2a2 2 0 01-2 2h-2"></path>
      <path d="M7 21H5a2 2 0 01-2-2v-2"></path>
    </svg>
  );
});

Scan.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Scan.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Scan.displayName = "Scan";
