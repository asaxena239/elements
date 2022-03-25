import React, { forwardRef } from "react";
import p from "prop-types";
export const Bold = forwardRef(function Bold(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
      <path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"></path>
    </svg>
  );
});

Bold.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bold.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bold.displayName = "Bold";
