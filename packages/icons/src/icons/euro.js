import React, { forwardRef } from "react";
import p from "prop-types";
export const Euro = forwardRef(function Euro(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 10h12"></path>
      <path d="M4 14h9"></path>
      <path d="M19 6a7.7 7.7 0 00-5.2-2A7.9 7.9 0 006 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"></path>
    </svg>
  );
});

Euro.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Euro.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Euro.displayName = "Euro";
