import React, { forwardRef } from "react";
import p from "prop-types";
export const PackageX = forwardRef(function PackageX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14"></path>
      <path d="M16.5 9.4L7.55 4.24"></path>
      <path d="M3.29 7L12 12m0 0l8.71-5M12 12v10"></path>
      <path d="M17 13l5 5m-5 0l5-5"></path>
    </svg>
  );
});

PackageX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PackageX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PackageX.displayName = "PackageX";
