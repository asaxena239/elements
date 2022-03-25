import React, { forwardRef } from "react";
import p from "prop-types";
export const MonitorSpeaker = forwardRef(function MonitorSpeaker(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5.5 20H8"></path>
      <path d="M17 9h.01"></path>
      <rect x="12" y="4" width="10" height="16" rx="2"></rect>
      <path d="M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4"></path>
      <circle cx="17" cy="15" r="1"></circle>
    </svg>
  );
});

MonitorSpeaker.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MonitorSpeaker.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MonitorSpeaker.displayName = "MonitorSpeaker";
