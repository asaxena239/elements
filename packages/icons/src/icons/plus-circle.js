import React, { forwardRef } from "react";
import p from "prop-types";
export const PlusCircle = forwardRef(function PlusCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
});

PlusCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PlusCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PlusCircle.displayName = "PlusCircle";
