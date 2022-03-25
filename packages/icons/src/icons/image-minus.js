import React, { forwardRef } from "react";
import p from "prop-types";
export const ImageMinus = forwardRef(function ImageMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 11v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8"></path>
      <path d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M21 15l-5-5L5 21"></path>
      <path d="M22 5h-6"></path>
    </svg>
  );
});

ImageMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ImageMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ImageMinus.displayName = "ImageMinus";
