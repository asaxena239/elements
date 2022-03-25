import React, { forwardRef } from "react";
import p from "prop-types";
export const Gavel = forwardRef(function Gavel(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10"></path>
      <path d="M16 16l6-6"></path>
      <path d="M8 8l6-6"></path>
      <path d="M9 7l8 8"></path>
      <path d="M21 11l-8-8"></path>
    </svg>
  );
});

Gavel.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Gavel.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Gavel.displayName = "Gavel";
