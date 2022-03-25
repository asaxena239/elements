import React, { forwardRef } from "react";
import p from "prop-types";
export const Indent = forwardRef(function Indent(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="3 8 7 12 3 16"></polyline>
      <line x1="21" y1="12" x2="11" y2="12"></line>
      <line x1="21" y1="6" x2="11" y2="6"></line>
      <line x1="21" y1="18" x2="11" y2="18"></line>
    </svg>
  );
});

Indent.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Indent.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Indent.displayName = "Indent";
