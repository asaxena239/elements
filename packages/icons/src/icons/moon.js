import React, { forwardRef } from "react";
import p from "prop-types";
export const Moon = forwardRef(function Moon(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
    </svg>
  );
});

Moon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Moon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Moon.displayName = "Moon";
