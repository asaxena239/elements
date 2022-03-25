import React, { forwardRef } from "react";
import p from "prop-types";
export const BoxSelect = forwardRef(function BoxSelect(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 2a2 2 0 00-2 2"></path>
      <line x1="8" y1="2" x2="10" y2="2"></line>
      <line x1="14" y1="2" x2="16" y2="2"></line>
      <path d="M4 22a2 2 0 01-2-2"></path>
      <line x1="22" y1="8" x2="22" y2="10"></line>
      <line x1="22" y1="14" x2="22" y2="16"></line>
      <path d="M22 20a2 2 0 01-2 2"></path>
      <line x1="14" y1="22" x2="16" y2="22"></line>
      <line x1="8" y1="22" x2="10" y2="22"></line>
      <path d="M20 2a2 2 0 012 2"></path>
      <line x1="2" y1="14" x2="2" y2="16"></line>
      <line x1="2" y1="8" x2="2" y2="10"></line>
    </svg>
  );
});

BoxSelect.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BoxSelect.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BoxSelect.displayName = "BoxSelect";
