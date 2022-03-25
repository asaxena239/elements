import React, { forwardRef } from "react";
import p from "prop-types";
export const FileDigit = forwardRef(function FileDigit(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4"></path>
      <path d="M14 2v6h6"></path>
      <path d="M10 12h2v6"></path>
      <rect x="2" y="12" width="4" height="6"></rect>
      <path d="M10 18h4"></path>
    </svg>
  );
});

FileDigit.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FileDigit.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FileDigit.displayName = "FileDigit";
