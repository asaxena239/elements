import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronFirst = forwardRef(function ChevronFirst(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="17 18 11 12 17 6"></polyline>
      <path d="M7 6v12"></path>
    </svg>
  );
});

ChevronFirst.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronFirst.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronFirst.displayName = "ChevronFirst";
