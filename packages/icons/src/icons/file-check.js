import React, { forwardRef } from "react";
import p from "prop-types";
export const FileCheck = forwardRef(function FileCheck(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <path d="M9 15l2 2 4-4"></path>
    </svg>
  );
});

FileCheck.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FileCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FileCheck.displayName = "FileCheck";
