import React, { forwardRef } from "react";
import p from "prop-types";
export const Forward = forwardRef(function Forward(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="15 17 20 12 15 7"></polyline>
      <path d="M4 18v-2a4 4 0 014-4h12"></path>
    </svg>
  );
});

Forward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Forward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Forward.displayName = "Forward";
