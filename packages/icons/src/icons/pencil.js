import React, { forwardRef } from "react";
import p from "prop-types";
export const Pencil = forwardRef(function Pencil(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="18" y1="2" x2="22" y2="6"></line>
      <path d="M7.5 20.5L19 9l-4-4L3.5 16.5 2 22z"></path>
    </svg>
  );
});

Pencil.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Pencil.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Pencil.displayName = "Pencil";
