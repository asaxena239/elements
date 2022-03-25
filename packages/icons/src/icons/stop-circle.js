import React, { forwardRef } from "react";
import p from "prop-types";
export const StopCircle = forwardRef(function StopCircle(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <rect x="9" y="9" width="6" height="6"></rect>
    </svg>
  );
});

StopCircle.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

StopCircle.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

StopCircle.displayName = "StopCircle";
