import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignCenterVertical = forwardRef(function AlignCenterVertical(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2v20"></path>
      <path d="M8 10H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4"></path>
      <path d="M16 10h4a2 2 0 002-2V6a2 2 0 00-2-2h-4"></path>
      <path d="M8 20H7a2 2 0 01-2-2v-2c0-1.1.9-2 2-2h1"></path>
      <path d="M16 14h1a2 2 0 012 2v2a2 2 0 01-2 2h-1"></path>
    </svg>
  );
});

AlignCenterVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignCenterVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignCenterVertical.displayName = "AlignCenterVertical";
