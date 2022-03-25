import React, { forwardRef } from "react";
import p from "prop-types";
export const ZapOff = forwardRef(function ZapOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
      <polyline points="18.57 12.91 21 10 15.66 10"></polyline>
      <polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
});

ZapOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ZapOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ZapOff.displayName = "ZapOff";
