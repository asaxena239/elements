import React, { forwardRef } from "react";
import p from "prop-types";
export const Bus = forwardRef(function Bus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 17h2l.64-2.54a6 6 0 000-2.92l-1.07-4.27A3 3 0 0017.66 5H4a2 2 0 00-2 2v10h2m10 0h-4"></path>
      <circle cx="6.5" cy="17.5" r="2.5"></circle>
      <circle cx="16.5" cy="17.5" r="2.5"></circle>
    </svg>
  );
});

Bus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bus.displayName = "Bus";
