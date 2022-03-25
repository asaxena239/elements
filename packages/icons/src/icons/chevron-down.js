import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronDown = forwardRef(function ChevronDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
});

ChevronDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronDown.displayName = "ChevronDown";
