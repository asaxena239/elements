import React, { forwardRef } from "react";
import p from "prop-types";
export const Outdent = forwardRef(function Outdent(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="7 8 3 12 7 16"></polyline>
      <line x1="21" y1="12" x2="11" y2="12"></line>
      <line x1="21" y1="6" x2="11" y2="6"></line>
      <line x1="21" y1="18" x2="11" y2="18"></line>
    </svg>
  );
});

Outdent.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Outdent.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Outdent.displayName = "Outdent";
