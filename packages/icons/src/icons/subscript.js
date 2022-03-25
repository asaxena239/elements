import React, { forwardRef } from "react";
import p from "prop-types";
export const Subscript = forwardRef(function Subscript(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 5l8 8"></path>
      <path d="M12 5l-8 8"></path>
      <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 00-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
    </svg>
  );
});

Subscript.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Subscript.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Subscript.displayName = "Subscript";
