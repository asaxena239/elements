import React, { forwardRef } from "react";
import p from "prop-types";
export const Tablet = forwardRef(function Tablet(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );
});

Tablet.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tablet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tablet.displayName = "Tablet";
