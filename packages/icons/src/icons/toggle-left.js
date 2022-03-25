import React, { forwardRef } from "react";
import p from "prop-types";
export const ToggleLeft = forwardRef(function ToggleLeft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
      <circle cx="8" cy="12" r="3"></circle>
    </svg>
  );
});

ToggleLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ToggleLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ToggleLeft.displayName = "ToggleLeft";
