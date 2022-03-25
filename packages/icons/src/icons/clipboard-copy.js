import React, { forwardRef } from "react";
import p from "prop-types";
export const ClipboardCopy = forwardRef(function ClipboardCopy(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 4h2a2 2 0 012 2v4M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      <path d="M21 14H11"></path>
      <path d="M15 10l-4 4 4 4"></path>
    </svg>
  );
});

ClipboardCopy.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ClipboardCopy.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ClipboardCopy.displayName = "ClipboardCopy";
