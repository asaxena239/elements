import React, { forwardRef } from "react";
import p from "prop-types";
export const Mic = forwardRef(function Mic(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"></path>
      <path d="M19 10v2a7 7 0 01-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  );
});

Mic.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Mic.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Mic.displayName = "Mic";
