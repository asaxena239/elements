import React, { forwardRef } from "react";
import p from "prop-types";
export const Clock6 = forwardRef(function Clock6(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 12 16.5"></polyline>
    </svg>
  );
});

Clock6.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Clock6.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Clock6.displayName = "Clock6";