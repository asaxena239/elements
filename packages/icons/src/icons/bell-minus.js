import React, { forwardRef } from "react";
import p from "prop-types";
export const BellMinus = forwardRef(function BellMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      <path d="M21 5h-6"></path>
      <path d="M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916"></path>
    </svg>
  );
});

BellMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BellMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BellMinus.displayName = "BellMinus";
