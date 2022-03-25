import React, { forwardRef } from "react";
import p from "prop-types";
export const Expand = forwardRef(function Expand(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 21l-6-6m6 6v-4.8m0 4.8h-4.8"></path>
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
    </svg>
  );
});

Expand.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Expand.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Expand.displayName = "Expand";
