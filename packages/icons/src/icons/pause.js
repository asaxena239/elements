import React, { forwardRef } from "react";
import p from "prop-types";
export const Pause = forwardRef(function Pause(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  );
});

Pause.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Pause.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Pause.displayName = "Pause";
