import React, { forwardRef } from "react";
import p from "prop-types";
export const BellRing = forwardRef(function BellRing(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      <path d="M2 8c0-2.2.7-4.3 2-6"></path>
      <path d="M22 8a10 10 0 00-2-6"></path>
    </svg>
  );
});

BellRing.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BellRing.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BellRing.displayName = "BellRing";
