import React, { forwardRef } from "react";
import p from "prop-types";
export const TerminalSquare = forwardRef(function TerminalSquare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 11l2-2-2-2"></path>
      <path d="M11 13h4"></path>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  );
});

TerminalSquare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TerminalSquare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TerminalSquare.displayName = "TerminalSquare";
