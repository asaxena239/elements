import React, { forwardRef } from "react";
import p from "prop-types";
export const ListPlus = forwardRef(function ListPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 12H3"></path>
      <path d="M16 6H3"></path>
      <path d="M16 18H3"></path>
      <path d="M18 9v6"></path>
      <path d="M21 12h-6"></path>
    </svg>
  );
});

ListPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ListPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ListPlus.displayName = "ListPlus";
