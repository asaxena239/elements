import React, { forwardRef } from "react";
import p from "prop-types";
export const ListMinus = forwardRef(function ListMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 12H3"></path>
      <path d="M16 6H3"></path>
      <path d="M16 18H3"></path>
      <path d="M21 12h-6"></path>
    </svg>
  );
});

ListMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ListMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ListMinus.displayName = "ListMinus";
