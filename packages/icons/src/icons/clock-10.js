import React, { forwardRef } from "react";
import p from "prop-types";
export const Clock10 = forwardRef(function Clock10(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 8 10"></polyline>
    </svg>
  );
});

Clock10.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Clock10.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Clock10.displayName = "Clock10";
