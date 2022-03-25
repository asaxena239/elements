import React, { forwardRef } from "react";
import p from "prop-types";
export const Navigation = forwardRef(function Navigation(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
    </svg>
  );
});

Navigation.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Navigation.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Navigation.displayName = "Navigation";
