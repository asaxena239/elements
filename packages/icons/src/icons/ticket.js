import React, { forwardRef } from "react";
import p from "prop-types";
export const Ticket = forwardRef(function Ticket(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2M3 15v2a2 2 0 002 2h14a2 2 0 002-2v-2"></path>
      <path d="M21 15a3 3 0 110-6"></path>
      <path d="M3 15a3 3 0 100-6"></path>
      <path d="M13 5v2"></path>
      <path d="M13 17v2"></path>
      <path d="M13 11v2"></path>
    </svg>
  );
});

Ticket.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Ticket.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Ticket.displayName = "Ticket";
