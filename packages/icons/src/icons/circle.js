import React, { forwardRef } from "react";
import p from "prop-types";
export const Circle = forwardRef(function Circle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  );
});

Circle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Circle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Circle.displayName = "Circle";
