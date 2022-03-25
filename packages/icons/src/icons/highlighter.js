import React, { forwardRef } from "react";
import p from "prop-types";
export const Highlighter = forwardRef(function Highlighter(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 11l-6 6v3h9l3-3"></path>
      <path d="M22 12l-4.6 4.6a2 2 0 01-2.8 0l-5.2-5.2a2 2 0 010-2.8L14 4"></path>
    </svg>
  );
});

Highlighter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Highlighter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Highlighter.displayName = "Highlighter";
