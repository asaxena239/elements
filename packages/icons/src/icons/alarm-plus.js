import React, { forwardRef } from "react";
import p from "prop-types";
export const AlarmPlus = forwardRef(function AlarmPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 21a8 8 0 100-16 8 8 0 000 16z"></path>
      <path d="M5 3L2 6"></path>
      <path d="M22 6l-3-3"></path>
      <path d="M6 19l-2 2"></path>
      <path d="M18 19l2 2"></path>
      <path d="M12 10v6"></path>
      <path d="M9 13h6"></path>
    </svg>
  );
});

AlarmPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlarmPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlarmPlus.displayName = "AlarmPlus";
