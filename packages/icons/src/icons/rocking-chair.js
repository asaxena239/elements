import React, { forwardRef } from "react";
import p from "prop-types";
export const RockingChair = forwardRef(function RockingChair(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="3.5 2 6.5 12.5 18 12.5"></polyline>
      <line x1="9.5" y1="12.5" x2="5.5" y2="20"></line>
      <line x1="15" y1="12.5" x2="18.5" y2="20"></line>
      <path d="M2.75 18a13 13 0 0018.5 0"></path>
    </svg>
  );
});

RockingChair.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RockingChair.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RockingChair.displayName = "RockingChair";
