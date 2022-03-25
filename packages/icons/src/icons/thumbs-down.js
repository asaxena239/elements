import React, { forwardRef } from "react";
import p from "prop-types";
export const ThumbsDown = forwardRef(function ThumbsDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 15v4a3 3 0 003 3l4-9V2H5.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3zm7-13h2.67A2.31 2.31 0 0122 4v7a2.31 2.31 0 01-2.33 2H17"></path>
    </svg>
  );
});

ThumbsDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ThumbsDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ThumbsDown.displayName = "ThumbsDown";
