import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowBigRight = forwardRef(function ArrowBigRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 12l-7-7v4H3v6h11v4z"></path>
    </svg>
  );
});

ArrowBigRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowBigRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowBigRight.displayName = "ArrowBigRight";
