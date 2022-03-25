import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowBigUp = forwardRef(function ArrowBigUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 21V10H5l7-7 7 7h-4v11z"></path>
    </svg>
  );
});

ArrowBigUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowBigUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowBigUp.displayName = "ArrowBigUp";
