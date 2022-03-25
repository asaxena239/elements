import React, { forwardRef } from "react";
import p from "prop-types";
export const Power = forwardRef(function Power(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18.36 6.64a9 9 0 11-12.73 0"></path>
      <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
  );
});

Power.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Power.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Power.displayName = "Power";
