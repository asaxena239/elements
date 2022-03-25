import React, { forwardRef } from "react";
import p from "prop-types";
export const UserMinus = forwardRef(function UserMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  );
});

UserMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

UserMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

UserMinus.displayName = "UserMinus";
