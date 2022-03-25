import React, { forwardRef } from "react";
import p from "prop-types";
export const Bike = forwardRef(function Bike(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="5.5" cy="17.5" r="3.5"></circle>
      <circle cx="18.5" cy="17.5" r="3.5"></circle>
      <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path>
    </svg>
  );
});

Bike.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bike.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bike.displayName = "Bike";
