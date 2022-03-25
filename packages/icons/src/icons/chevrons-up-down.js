import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronsUpDown = forwardRef(function ChevronsUpDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 15l5 5 5-5"></path>
      <path d="M7 9l5-5 5 5"></path>
    </svg>
  );
});

ChevronsUpDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronsUpDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronsUpDown.displayName = "ChevronsUpDown";
