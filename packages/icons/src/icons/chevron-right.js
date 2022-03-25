import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronRight = forwardRef(function ChevronRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
});

ChevronRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronRight.displayName = "ChevronRight";
