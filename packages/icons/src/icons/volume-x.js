import React, { forwardRef } from "react";
import p from "prop-types";
export const VolumeX = forwardRef(function VolumeX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  );
});

VolumeX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

VolumeX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

VolumeX.displayName = "VolumeX";
