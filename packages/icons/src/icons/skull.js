import React, { forwardRef } from "react";
import p from "prop-types";
export const Skull = forwardRef(function Skull(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M8 20v2h8v-2"></path>
      <path d="M12.5 17l-.5-1-.5 1h1z"></path>
      <path d="M16 20a2 2 0 001.56-3.25 8 8 0 10-11.12 0A2 2 0 008 20"></path>
    </svg>
  );
});

Skull.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Skull.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Skull.displayName = "Skull";
