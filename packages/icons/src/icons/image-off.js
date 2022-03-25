import React, { forwardRef } from "react";
import p from "prop-types";
export const ImageOff = forwardRef(function ImageOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 2l20 20"></path>
      <path d="M9 3h10a2 2 0 012 2v10M3.59 3.59A2 2 0 003 5v14c0 1.1.9 2 2 2h14a2 2 0 001.41-.59"></path>
      <path d="M9.56 9.56a1.5 1.5 0 01-2.12-2.12"></path>
      <path d="M21 15l-5-5M5 21l8-8"></path>
    </svg>
  );
});

ImageOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ImageOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ImageOff.displayName = "ImageOff";
