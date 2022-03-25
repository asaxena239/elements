import React, { forwardRef } from "react";
import p from "prop-types";
export const Scale = forwardRef(function Scale(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 16l3-8 3.001 8A5.002 5.002 0 0116 16z"></path>
      <path d="M2 16l3-8 3.001 8A5.002 5.002 0 012 16z"></path>
      <path d="M7 21h10"></path>
      <path d="M12 3v18"></path>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
    </svg>
  );
});

Scale.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Scale.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Scale.displayName = "Scale";
