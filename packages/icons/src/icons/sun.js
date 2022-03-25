import React, { forwardRef } from "react";
import p from "prop-types";
export const Sun = forwardRef(function Sun(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2"></path>
      <path d="M12 20v2"></path>
      <path d="M5 5l1.5 1.5"></path>
      <path d="M17.5 17.5L19 19"></path>
      <path d="M2 12h2"></path>
      <path d="M20 12h2"></path>
      <path d="M5 19l1.5-1.5"></path>
      <path d="M17.5 6.5L19 5"></path>
    </svg>
  );
});

Sun.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Sun.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Sun.displayName = "Sun";
