import React, { forwardRef } from "react";
import p from "prop-types";
export const Underline = forwardRef(function Underline(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 4v6a6 6 0 0012 0V4"></path>
      <line x1="4" y1="20" x2="20" y2="20"></line>
    </svg>
  );
});

Underline.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Underline.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Underline.displayName = "Underline";
