import React, { forwardRef } from "react";
import p from "prop-types";
export const Umbrella = forwardRef(function Umbrella(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"></path>
    </svg>
  );
});

Umbrella.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Umbrella.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Umbrella.displayName = "Umbrella";
