import React, { forwardRef } from "react";
import p from "prop-types";
export const Hexagon = forwardRef(function Hexagon(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
    </svg>
  );
});

Hexagon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Hexagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Hexagon.displayName = "Hexagon";
