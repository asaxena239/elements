import React, { forwardRef } from "react";
import p from "prop-types";
export const Shovel = forwardRef(function Shovel(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 22v-5l5-5 5 5-5 5z"></path>
      <path d="M9.5 14.5L16 8"></path>
      <path d="M17 2l5 5-.5.5a3.53 3.53 0 01-5 0s0 0 0 0a3.53 3.53 0 010-5L17 2"></path>
    </svg>
  );
});

Shovel.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Shovel.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Shovel.displayName = "Shovel";
