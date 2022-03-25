import React, { forwardRef } from "react";
import p from "prop-types";
export const UserCheck = forwardRef(function UserCheck(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <polyline points="17 11 19 13 23 9"></polyline>
    </svg>
  );
});

UserCheck.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

UserCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

UserCheck.displayName = "UserCheck";
