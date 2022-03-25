import React, { forwardRef } from "react";
import p from "prop-types";
export const Timer = forwardRef(function Timer(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="10" x2="14" y1="2" y2="2"></line>
      <line x1="12" x2="15" y1="14" y2="11"></line>
      <circle cx="12" cy="14" r="8"></circle>
    </svg>
  );
});

Timer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Timer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Timer.displayName = "Timer";
