import React, { forwardRef } from "react";
import p from "prop-types";
export const Banknote = forwardRef(function Banknote(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M6 12h.01M18 12h.01"></path>
    </svg>
  );
});

Banknote.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Banknote.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Banknote.displayName = "Banknote";
