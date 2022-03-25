import React, { forwardRef } from "react";
import p from "prop-types";
export const Currency = forwardRef(function Currency(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="8"></circle>
      <line x1="3" y1="3" x2="6" y2="6"></line>
      <line x1="21" y1="3" x2="18" y2="6"></line>
      <line x1="3" y1="21" x2="6" y2="18"></line>
      <line x1="21" y1="21" x2="18" y2="18"></line>
    </svg>
  );
});

Currency.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Currency.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Currency.displayName = "Currency";
