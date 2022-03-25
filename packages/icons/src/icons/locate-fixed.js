import React, { forwardRef } from "react";
import p from "prop-types";
export const LocateFixed = forwardRef(function LocateFixed(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="2" x2="5" y1="12" y2="12"></line>
      <line x1="19" x2="22" y1="12" y2="12"></line>
      <line x1="12" x2="12" y1="2" y2="5"></line>
      <line x1="12" x2="12" y1="19" y2="22"></line>
      <circle cx="12" cy="12" r="7"></circle>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
});

LocateFixed.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LocateFixed.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LocateFixed.displayName = "LocateFixed";
