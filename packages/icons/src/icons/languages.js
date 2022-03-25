import React, { forwardRef } from "react";
import p from "prop-types";
export const Languages = forwardRef(function Languages(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 8l6 6"></path>
      <path d="M4 14l6-6 2-3"></path>
      <path d="M2 5h12"></path>
      <path d="M7 2h1"></path>
      <path d="M22 22l-5-10-5 10"></path>
      <path d="M14 18h6"></path>
    </svg>
  );
});

Languages.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Languages.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Languages.displayName = "Languages";
