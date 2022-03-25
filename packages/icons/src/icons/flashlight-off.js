import React, { forwardRef } from "react";
import p from "prop-types";
export const FlashlightOff = forwardRef(function FlashlightOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 16v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4"></path>
      <path d="M7 2h11v4c0 2-2 2-2 4v1"></path>
      <line x1="11" y1="6" x2="18" y2="6"></line>
      <line x1="2" y1="2" x2="22" y2="22"></line>
    </svg>
  );
});

FlashlightOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FlashlightOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FlashlightOff.displayName = "FlashlightOff";
