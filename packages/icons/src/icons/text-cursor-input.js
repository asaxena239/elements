import React, { forwardRef } from "react";
import p from "prop-types";
export const TextCursorInput = forwardRef(function TextCursorInput(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5.3 4h.9C7.7 4 9 5.3 9 6.7m0 0v10.5c0 1.6-1.1 2.7-2.7 2.7h-1M9 6.7v10.6a2.6 2.6 0 002.7 2.7h1M9 6.7C9 5.2 10.2 4 11.8 4h.9"></path>
      <path d="M13.1 7.9h6.8c1.1 0 2.1 1 2.1 2.1v4c0 1.1-.9 2.1-2.1 2.1h-6.8"></path>
      <path d="M4.8 16.1h-.7C3 16.1 2 15.1 2 14v-4c0-1.1 1-2.1 2.1-2.1h.7"></path>
    </svg>
  );
});

TextCursorInput.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

TextCursorInput.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

TextCursorInput.displayName = "TextCursorInput";
