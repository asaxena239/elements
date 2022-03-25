import React, { forwardRef } from "react";
import p from "prop-types";
export const Minimize = forwardRef(function Minimize(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"></path>
    </svg>
  );
});

Minimize.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Minimize.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Minimize.displayName = "Minimize";
