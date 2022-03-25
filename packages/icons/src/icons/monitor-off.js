import React, { forwardRef } from "react";
import p from "prop-types";
export const MonitorOff = forwardRef(function MonitorOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 17H4a2 2 0 01-2-2V5c0-1.5 1-2 1-2"></path>
      <path d="M22 15V5a2 2 0 00-2-2H9"></path>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <path d="M2 2l20 20"></path>
    </svg>
  );
});

MonitorOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MonitorOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MonitorOff.displayName = "MonitorOff";
