import React, { forwardRef } from "react";
import p from "prop-types";
export const Copyleft = forwardRef(function Copyleft(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9 9.35a4 4 0 110 5.3"></path>
    </svg>
  );
});

Copyleft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Copyleft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Copyleft.displayName = "Copyleft";
