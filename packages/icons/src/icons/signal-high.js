import React, { forwardRef } from "react";
import p from "prop-types";
export const SignalHigh = forwardRef(function SignalHigh(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
      <path d="M12 20v-8"></path>
      <path d="M17 20V8"></path>
    </svg>
  );
});

SignalHigh.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SignalHigh.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SignalHigh.displayName = "SignalHigh";
