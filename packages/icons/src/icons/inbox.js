import React, { forwardRef } from "react";
import p from "prop-types";
export const Inbox = forwardRef(function Inbox(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"></path>
    </svg>
  );
});

Inbox.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Inbox.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Inbox.displayName = "Inbox";
