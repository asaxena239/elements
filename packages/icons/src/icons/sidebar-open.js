import React, { forwardRef } from "react";
import p from "prop-types";
export const SidebarOpen = forwardRef(function SidebarOpen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="3" x2="9" y2="21"></line>
      <path d="M13 8l4 4-4 4"></path>
    </svg>
  );
});

SidebarOpen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SidebarOpen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SidebarOpen.displayName = "SidebarOpen";
