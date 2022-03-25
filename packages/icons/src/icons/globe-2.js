import React, { forwardRef } from "react";
import p from "prop-types";
export const Globe2 = forwardRef(function Globe2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 21v-4a2 2 0 012-2h4"></path>
      <path d="M7 4v2a3 3 0 003 2h0a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h3"></path>
      <path d="M3 11h2a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v4"></path>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
});

Globe2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Globe2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Globe2.displayName = "Globe2";
