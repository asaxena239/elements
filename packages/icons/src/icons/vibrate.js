import React, { forwardRef } from "react";
import p from "prop-types";
export const Vibrate = forwardRef(function Vibrate(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 8l2 2-2 2 2 2-2 2"></path>
      <path d="M22 8l-2 2 2 2-2 2 2 2"></path>
      <rect x="8" y="5" width="8" height="14" rx="1"></rect>
    </svg>
  );
});

Vibrate.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Vibrate.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Vibrate.displayName = "Vibrate";
