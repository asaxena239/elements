import React, { forwardRef } from "react";
import p from "prop-types";
export const Tv = forwardRef(function Tv(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
      <polyline points="17 2 12 7 7 2"></polyline>
    </svg>
  );
});

Tv.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tv.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tv.displayName = "Tv";
