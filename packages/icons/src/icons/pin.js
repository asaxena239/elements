import React, { forwardRef } from "react";
import p from "prop-types";
export const Pin = forwardRef(function Pin(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 21v-7"></path>
      <path d="M9 3v5l-2 4v2h10m0 0h-5m5 0v-2l-2-4V3"></path>
      <path d="M7 3h10"></path>
    </svg>
  );
});

Pin.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Pin.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Pin.displayName = "Pin";
