import React, { forwardRef } from "react";
import p from "prop-types";
export const Tv2 = forwardRef(function Tv2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 21h10"></path>
      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
    </svg>
  );
});

Tv2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tv2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tv2.displayName = "Tv2";
