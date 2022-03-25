import React, { forwardRef } from "react";
import p from "prop-types";
export const RussianRuble = forwardRef(function RussianRuble(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 11c5.333 0 5.333-8 0-8"></path>
      <path d="M6 11h8"></path>
      <path d="M6 15h8"></path>
      <path d="M9 21V3"></path>
      <path d="M9 3h5"></path>
    </svg>
  );
});

RussianRuble.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RussianRuble.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RussianRuble.displayName = "RussianRuble";
