import React, { forwardRef } from "react";
import p from "prop-types";
export const AlarmClock = forwardRef(function AlarmClock(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="13" r="8"></circle>
      <path d="M12 9v4l2 2"></path>
      <path d="M5 3L2 6"></path>
      <path d="M22 6l-3-3"></path>
      <path d="M6 19l-2 2"></path>
      <path d="M18 19l2 2"></path>
    </svg>
  );
});

AlarmClock.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlarmClock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlarmClock.displayName = "AlarmClock";
