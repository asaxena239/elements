import React, { forwardRef } from "react";
import p from "prop-types";
export const Strikethrough = forwardRef(function Strikethrough(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 4H9a3 3 0 00-2.83 4"></path>
      <path d="M14 12a4 4 0 010 8H6"></path>
      <line x1="4" y1="12" x2="20" y2="12"></line>
    </svg>
  );
});

Strikethrough.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Strikethrough.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Strikethrough.displayName = "Strikethrough";
