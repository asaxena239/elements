import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronsDownUp = forwardRef(function ChevronsDownUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 20l5-5 5 5"></path>
      <path d="M7 4l5 5 5-5"></path>
    </svg>
  );
});

ChevronsDownUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronsDownUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronsDownUp.displayName = "ChevronsDownUp";
