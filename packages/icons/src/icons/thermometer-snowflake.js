import React, { forwardRef } from "react";
import p from "prop-types";
export const ThermometerSnowflake = forwardRef(function ThermometerSnowflake(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 12h10"></path>
      <path d="M9 4v16"></path>
      <path d="M3 9l3 3-3 3"></path>
      <path d="M12 6L9 9 6 6"></path>
      <path d="M6 18l3-3 1.5 1.5"></path>
      <path d="M18 2a2 2 0 00-2 2v10.5a4 4 0 104 0V4a2 2 0 00-2-2z"></path>
    </svg>
  );
});

ThermometerSnowflake.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ThermometerSnowflake.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ThermometerSnowflake.displayName = "ThermometerSnowflake";
