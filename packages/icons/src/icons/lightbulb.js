import React, { forwardRef } from "react";
import p from "prop-types";
export const Lightbulb = forwardRef(function Lightbulb(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="9" y1="18" x2="15" y2="18"></line>
      <line x1="10" y1="22" x2="14" y2="22"></line>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14"></path>
    </svg>
  );
});

Lightbulb.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Lightbulb.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Lightbulb.displayName = "Lightbulb";
