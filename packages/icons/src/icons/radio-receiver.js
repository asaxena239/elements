import React, { forwardRef } from "react";
import p from "prop-types";
export const RadioReceiver = forwardRef(function RadioReceiver(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 16v2"></path>
      <path d="M19 16v2"></path>
      <rect x="2" y="8" width="20" height="8" rx="2"></rect>
      <path d="M18 12h0"></path>
    </svg>
  );
});

RadioReceiver.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RadioReceiver.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RadioReceiver.displayName = "RadioReceiver";
