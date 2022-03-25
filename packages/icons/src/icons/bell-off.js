import React, { forwardRef } from "react";
import p from "prop-types";
export const BellOff = forwardRef(function BellOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      <path d="M18.63 13A17.888 17.888 0 0118 8"></path>
      <path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"></path>
      <path d="M18 8a6 6 0 00-9.33-5"></path>
      <path d="M2 2l20 20"></path>
    </svg>
  );
});

BellOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BellOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BellOff.displayName = "BellOff";
