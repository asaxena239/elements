import React, { forwardRef } from "react";
import p from "prop-types";
export const Clipboard = forwardRef(function Clipboard(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  );
});

Clipboard.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Clipboard.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Clipboard.displayName = "Clipboard";
