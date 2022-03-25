import React, { forwardRef } from "react";
import p from "prop-types";
export const IndianRupee = forwardRef(function IndianRupee(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 3h12"></path>
      <path d="M6 8h12"></path>
      <path d="M6 13l8.5 8"></path>
      <path d="M6 13h3"></path>
      <path d="M9 13c6.667 0 6.667-10 0-10"></path>
    </svg>
  );
});

IndianRupee.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

IndianRupee.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

IndianRupee.displayName = "IndianRupee";
