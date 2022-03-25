import React, { forwardRef } from "react";
import p from "prop-types";
export const FileX2 = forwardRef(function FileX2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4"></path>
      <path d="M14 2v6h6"></path>
      <path d="M3 12.5l5 5"></path>
      <path d="M8 12.5l-5 5"></path>
    </svg>
  );
});

FileX2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FileX2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FileX2.displayName = "FileX2";
