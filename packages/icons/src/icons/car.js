import React, { forwardRef } from "react";
import p from "prop-types";
export const Car = forwardRef(function Car(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2"></path>
      <circle cx="6.5" cy="16.5" r="2.5"></circle>
      <circle cx="16.5" cy="16.5" r="2.5"></circle>
    </svg>
  );
});

Car.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Car.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Car.displayName = "Car";
