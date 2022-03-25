import React, { forwardRef } from "react";
import p from "prop-types";
export const Triangle = forwardRef(function Triangle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
    </svg>
  );
});

Triangle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Triangle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Triangle.displayName = "Triangle";
