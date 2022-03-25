import React, { forwardRef } from "react";
import p from "prop-types";
export const HelpCircle = forwardRef(function HelpCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
});

HelpCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

HelpCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

HelpCircle.displayName = "HelpCircle";
