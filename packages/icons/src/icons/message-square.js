import React, { forwardRef } from "react";
import p from "prop-types";
export const MessageSquare = forwardRef(function MessageSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
    </svg>
  );
});

MessageSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MessageSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MessageSquare.displayName = "MessageSquare";
