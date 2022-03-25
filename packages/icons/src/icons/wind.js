import React, { forwardRef } from "react";
import p from "prop-types";
export const Wind = forwardRef(function Wind(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"></path>
      <path d="M9.6 4.6A2 2 0 1111 8H2"></path>
      <path d="M12.6 19.4A2 2 0 1014 16H2"></path>
    </svg>
  );
});

Wind.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Wind.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Wind.displayName = "Wind";
