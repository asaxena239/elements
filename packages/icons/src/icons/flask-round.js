import React, { forwardRef } from "react";
import p from "prop-types";
export const FlaskRound = forwardRef(function FlaskRound(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 2v7.31"></path>
      <path d="M14 9.3V1.99"></path>
      <path d="M8.5 2h7"></path>
      <path d="M14 9.3a6.5 6.5 0 11-4 0"></path>
      <path d="M5.58 16.5h12.85"></path>
    </svg>
  );
});

FlaskRound.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FlaskRound.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FlaskRound.displayName = "FlaskRound";
