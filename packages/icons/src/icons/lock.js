import React, { forwardRef } from "react";
import p from "prop-types";
export const Lock = forwardRef(function Lock(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0110 0v4"></path>
    </svg>
  );
});

Lock.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Lock.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Lock.displayName = "Lock";
