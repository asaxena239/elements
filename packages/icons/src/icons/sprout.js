import React, { forwardRef } from "react";
import p from "prop-types";
export const Sprout = forwardRef(function Sprout(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 20h10"></path>
      <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
      <path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
    </svg>
  );
});

Sprout.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Sprout.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Sprout.displayName = "Sprout";
