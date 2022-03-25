import React, { forwardRef } from "react";
import p from "prop-types";
export const Headphones = forwardRef(function Headphones(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
    </svg>
  );
});

Headphones.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Headphones.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Headphones.displayName = "Headphones";
