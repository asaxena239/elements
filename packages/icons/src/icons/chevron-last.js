import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronLast = forwardRef(function ChevronLast(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="7 18 13 12 7 6"></polyline>
      <path d="M17 6v12"></path>
    </svg>
  );
});

ChevronLast.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronLast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronLast.displayName = "ChevronLast";
