import React, { forwardRef } from "react";
import p from "prop-types";
export const PhoneMissed = forwardRef(function PhoneMissed(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="22" y1="2" x2="16" y2="8"></line>
      <line x1="16" y1="2" x2="22" y2="8"></line>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
    </svg>
  );
});

PhoneMissed.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PhoneMissed.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PhoneMissed.displayName = "PhoneMissed";
