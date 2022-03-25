import React, { forwardRef } from "react";
import p from "prop-types";
export const TimerReset = forwardRef(function TimerReset(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 2h4"></path>
      <path d="M12 14v-4"></path>
      <path d="M4 13a8 8 0 018-7 8 8 0 11-5.3 14L4 17.6"></path>
      <path d="M9 17H4v5"></path>
    </svg>
  );
});

TimerReset.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TimerReset.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TimerReset.displayName = "TimerReset";
