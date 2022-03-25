import React, { forwardRef } from "react";
import p from "prop-types";
export const Zap = forwardRef(function Zap(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
});

Zap.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Zap.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Zap.displayName = "Zap";
