import React, { forwardRef } from "react";
import p from "prop-types";
export const Crop = forwardRef(function Crop(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6.13 1L6 16a2 2 0 002 2h15"></path>
      <path d="M1 6.13L16 6a2 2 0 012 2v15"></path>
    </svg>
  );
});

Crop.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Crop.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Crop.displayName = "Crop";
