import React, { forwardRef } from "react";
import p from "prop-types";
export const FlaskConical = forwardRef(function FlaskConical(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 2v8L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45L14 10V2"></path>
      <path d="M8.5 2h7"></path>
      <path d="M7 16h10"></path>
    </svg>
  );
});

FlaskConical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FlaskConical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FlaskConical.displayName = "FlaskConical";
