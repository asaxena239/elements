import React, { forwardRef } from "react";
import p from "prop-types";
export const LayoutGrid = forwardRef(function LayoutGrid(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
});

LayoutGrid.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LayoutGrid.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LayoutGrid.displayName = "LayoutGrid";
