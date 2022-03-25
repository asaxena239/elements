import React, { forwardRef } from "react";
import p from "prop-types";
export const FileCode = forwardRef(function FileCode(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4"></path>
      <path d="M14 2v6h6"></path>
      <path d="M9 18l3-3-3-3"></path>
      <path d="M5 12l-3 3 3 3"></path>
    </svg>
  );
});

FileCode.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FileCode.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FileCode.displayName = "FileCode";