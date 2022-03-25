import React, { forwardRef } from "react";
import p from "prop-types";
export const ZoomOut = forwardRef(function ZoomOut(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
  );
});

ZoomOut.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ZoomOut.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ZoomOut.displayName = "ZoomOut";
