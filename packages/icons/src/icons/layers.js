import React, { forwardRef } from "react";
import p from "prop-types";
export const Layers = forwardRef(function Layers(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
});

Layers.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Layers.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Layers.displayName = "Layers";
