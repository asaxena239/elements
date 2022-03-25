import React, { forwardRef } from "react";
import p from "prop-types";
export const AlarmClockOff = forwardRef(function AlarmClockOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19.94 14A8 8 0 0010 5.25m8.13 12.89A8 8 0 116.87 6.86"></path>
      <path d="M22 6l-3-3"></path>
      <path d="M6 19l-2 2"></path>
      <path d="M2 2l20 20"></path>
      <path d="M4 4L2 6"></path>
    </svg>
  );
});

AlarmClockOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlarmClockOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlarmClockOff.displayName = "AlarmClockOff";
