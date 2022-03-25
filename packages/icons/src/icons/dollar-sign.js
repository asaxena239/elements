import React, { forwardRef } from "react";
import p from "prop-types";
export const DollarSign = forwardRef(function DollarSign(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
    </svg>
  );
});

DollarSign.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

DollarSign.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

DollarSign.displayName = "DollarSign";
