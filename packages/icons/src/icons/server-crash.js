import React, { forwardRef } from "react";
import p from "prop-types";
export const ServerCrash = forwardRef(function ServerCrash(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 10H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-2"></path>
      <path d="M6 14H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2"></path>
      <path d="M6 6h.01"></path>
      <path d="M6 18h.01"></path>
      <path d="M13 6l-4 6h6l-4 6"></path>
    </svg>
  );
});

ServerCrash.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ServerCrash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ServerCrash.displayName = "ServerCrash";
