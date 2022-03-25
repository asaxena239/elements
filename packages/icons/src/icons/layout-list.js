import React, { forwardRef } from "react";
import p from "prop-types";
export const LayoutList = forwardRef(function LayoutList(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="14" width="7" height="7"></rect>
      <rect x="3" y="3" width="7" height="7"></rect>
      <line x1="14" y1="4" x2="21" y2="4"></line>
      <line x1="14" y1="9" x2="21" y2="9"></line>
      <line x1="14" y1="15" x2="21" y2="15"></line>
      <line x1="14" y1="20" x2="21" y2="20"></line>
    </svg>
  );
});

LayoutList.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LayoutList.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LayoutList.displayName = "LayoutList";
