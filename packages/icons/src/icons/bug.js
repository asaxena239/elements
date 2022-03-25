import React, { forwardRef } from "react";
import p from "prop-types";
export const Bug = forwardRef(function Bug(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect width="8" height="14" x="8" y="6" rx="4"></rect>
      <path d="M19 7l-3 2"></path>
      <path d="M5 7l3 2"></path>
      <path d="M19 19l-3-2"></path>
      <path d="M5 19l3-2"></path>
      <path d="M20 13h-4"></path>
      <path d="M4 13h4"></path>
      <path d="M10 4l1 2"></path>
      <path d="M14 4l-1 2"></path>
    </svg>
  );
});

Bug.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bug.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bug.displayName = "Bug";
