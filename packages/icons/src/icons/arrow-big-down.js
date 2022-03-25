import React, { forwardRef } from "react";
import p from "prop-types";
export const ArrowBigDown = forwardRef(function ArrowBigDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 3h6v11h4l-7 7-7-7h4z"></path>
    </svg>
  );
});

ArrowBigDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ArrowBigDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ArrowBigDown.displayName = "ArrowBigDown";
