import React, { forwardRef } from "react";
import p from "prop-types";
export const ListX = forwardRef(function ListX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 12H3"></path>
      <path d="M16 6H3"></path>
      <path d="M16 18H3"></path>
      <path d="M19 10l-4 4"></path>
      <path d="M15 10l4 4"></path>
    </svg>
  );
});

ListX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ListX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ListX.displayName = "ListX";
