import React, { forwardRef } from "react";
import p from "prop-types";
export const Share = forwardRef(function Share(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"></path>
      <polyline points="16 6 12 2 8 6"></polyline>
      <line x1="12" y1="2" x2="12" y2="15"></line>
    </svg>
  );
});

Share.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Share.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Share.displayName = "Share";
