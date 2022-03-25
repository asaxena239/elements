import React, { forwardRef } from "react";
import p from "prop-types";
export const ServerOff = forwardRef(function ServerOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5"></path>
      <path d="M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z"></path>
      <path d="M22 17v-1a2 2 0 00-2-2h-1"></path>
      <path d="M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z"></path>
      <path d="M6 18h.01"></path>
      <path d="M2 2l20 20"></path>
    </svg>
  );
});

ServerOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ServerOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ServerOff.displayName = "ServerOff";
