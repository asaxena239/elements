import React, { forwardRef } from "react";
import p from "prop-types";
export const TimerOff = forwardRef(function TimerOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 2h4"></path>
      <path d="M7.43 7.433A8 8 0 0118.566 18.57M4.582 11A8 8 0 0015 21.419"></path>
      <path d="M2 2l20 20"></path>
      <path d="M12 12v-2"></path>
    </svg>
  );
});

TimerOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TimerOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TimerOff.displayName = "TimerOff";
