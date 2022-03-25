import React, { forwardRef } from "react";
import p from "prop-types";
export const Cloudy = forwardRef(function Cloudy(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17.5 21a4.5 4.5 0 100-9h-1.8A7 7 0 109 21h8.5z"></path>
      <path d="M22 10c0-1.5-1.5-3-3.5-3H17c-.7-2.3-2.9-4-5.4-4-2.7 0-5 2-5.5 4.5"></path>
    </svg>
  );
});

Cloudy.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Cloudy.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Cloudy.displayName = "Cloudy";
