import React, { forwardRef } from "react";
import p from "prop-types";
export const StretchVertical = forwardRef(function StretchVertical(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="4" y="2" width="6" height="20" rx="2"></rect>
      <rect x="14" y="2" width="6" height="20" rx="2"></rect>
    </svg>
  );
});

StretchVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

StretchVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

StretchVertical.displayName = "StretchVertical";
