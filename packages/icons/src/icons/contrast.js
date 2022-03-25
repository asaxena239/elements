import React, { forwardRef } from "react";
import p from "prop-types";
export const Contrast = forwardRef(function Contrast(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 18a6 6 0 000-12v12z"></path>
    </svg>
  );
});

Contrast.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Contrast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Contrast.displayName = "Contrast";
