import React, { forwardRef } from "react";
import p from "prop-types";
export const FileInput = forwardRef(function FileInput(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4"></path>
      <path d="M14 2v6h6"></path>
      <path d="M2 15h10"></path>
      <path d="M9 18l3-3-3-3"></path>
    </svg>
  );
});

FileInput.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FileInput.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FileInput.displayName = "FileInput";