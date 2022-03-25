import React, { forwardRef } from "react";
import p from "prop-types";
export const LayoutDashboard = forwardRef(function LayoutDashboard(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="7" height="9"></rect>
      <rect x="14" y="3" width="7" height="5"></rect>
      <rect x="14" y="12" width="7" height="9"></rect>
      <rect x="3" y="16" width="7" height="5"></rect>
    </svg>
  );
});

LayoutDashboard.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LayoutDashboard.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LayoutDashboard.displayName = "LayoutDashboard";
