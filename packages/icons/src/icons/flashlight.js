import React, { forwardRef } from "react";
import p from "prop-types";
export const Flashlight = forwardRef(function Flashlight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 6c0 2-2 2-2 4v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V10c0-2-2-2-2-4V2h12z"></path>
      <line x1="6" y1="6" x2="18" y2="6"></line>
      <line x1="12" y1="12" x2="12" y2="12"></line>
    </svg>
  );
});

Flashlight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Flashlight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Flashlight.displayName = "Flashlight";
