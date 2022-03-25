import React, { forwardRef } from "react";
import p from "prop-types";
export const Slash = forwardRef(function Slash(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  );
});

Slash.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Slash.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Slash.displayName = "Slash";
