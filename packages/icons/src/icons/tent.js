import React, { forwardRef } from "react";
import p from "prop-types";
export const Tent = forwardRef(function Tent(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 20L10 4"></path>
      <path d="M5 20l9-16"></path>
      <path d="M3 20h18"></path>
      <path d="M12 15l-3 5"></path>
      <path d="M12 15l3 5"></path>
    </svg>
  );
});

Tent.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tent.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tent.displayName = "Tent";
