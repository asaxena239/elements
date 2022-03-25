import React, { forwardRef } from "react";
import p from "prop-types";
export const Anchor = forwardRef(function Anchor(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="5" r="3"></circle>
      <line x1="12" y1="22" x2="12" y2="8"></line>
      <path d="M5 12H2a10 10 0 0020 0h-3"></path>
    </svg>
  );
});

Anchor.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Anchor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Anchor.displayName = "Anchor";
