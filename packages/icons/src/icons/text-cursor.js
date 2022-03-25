import React, { forwardRef } from "react";
import p from "prop-types";
export const TextCursor = forwardRef(function TextCursor(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 22h-1a4 4 0 01-4-4V6a4 4 0 014-4h1"></path>
      <path d="M7 22h1a4 4 0 004-4v-1"></path>
      <path d="M7 2h1a4 4 0 014 4v1"></path>
    </svg>
  );
});

TextCursor.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TextCursor.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TextCursor.displayName = "TextCursor";
