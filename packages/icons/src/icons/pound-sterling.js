import React, { forwardRef } from "react";
import p from "prop-types";
export const PoundSterling = forwardRef(function PoundSterling(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 7c0-5.333-8-5.333-8 0"></path>
      <path d="M10 7v14"></path>
      <path d="M6 21h12"></path>
      <path d="M6 13h10"></path>
    </svg>
  );
});

PoundSterling.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PoundSterling.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PoundSterling.displayName = "PoundSterling";
