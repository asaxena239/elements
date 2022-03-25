import React, { forwardRef } from "react";
import p from "prop-types";
export const Smartphone = forwardRef(function Smartphone(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  );
});

Smartphone.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Smartphone.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Smartphone.displayName = "Smartphone";
