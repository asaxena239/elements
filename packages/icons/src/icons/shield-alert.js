import React, { forwardRef } from "react";
import p from "prop-types";
export const ShieldAlert = forwardRef(function ShieldAlert(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M12 8v4"></path>
      <path d="M12 16h.01"></path>
    </svg>
  );
});

ShieldAlert.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ShieldAlert.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ShieldAlert.displayName = "ShieldAlert";
