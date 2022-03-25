import React, { forwardRef } from "react";
import p from "prop-types";
export const ToggleRight = forwardRef(function ToggleRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="16" cy="12" r="3"></circle>
    </svg>
  );
});

ToggleRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ToggleRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ToggleRight.displayName = "ToggleRight";
