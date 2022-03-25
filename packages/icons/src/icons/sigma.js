import React, { forwardRef } from "react";
import p from "prop-types";
export const Sigma = forwardRef(function Sigma(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 7V4H6l6 8-6 8h12v-3"></path>
    </svg>
  );
});

Sigma.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Sigma.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Sigma.displayName = "Sigma";
