import React, { forwardRef } from "react";
import p from "prop-types";
export const SortDesc = forwardRef(function SortDesc(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 5h10"></path>
      <path d="M11 9h7"></path>
      <path d="M11 13h4"></path>
      <path d="M3 17l3 3 3-3"></path>
      <path d="M6 18V4"></path>
    </svg>
  );
});

SortDesc.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SortDesc.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SortDesc.displayName = "SortDesc";
