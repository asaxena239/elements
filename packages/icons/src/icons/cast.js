import React, { forwardRef } from "react";
import p from "prop-types";
export const Cast = forwardRef(function Cast(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6"></path>
      <line x1="2" y1="20" x2="2.01" y2="20"></line>
    </svg>
  );
});

Cast.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Cast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Cast.displayName = "Cast";
