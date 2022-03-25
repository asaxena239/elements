import React, { forwardRef } from "react";
import p from "prop-types";
export const GripHorizontal = forwardRef(function GripHorizontal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="9" r="1"></circle>
      <circle cx="19" cy="9" r="1"></circle>
      <circle cx="5" cy="9" r="1"></circle>
      <circle cx="12" cy="15" r="1"></circle>
      <circle cx="19" cy="15" r="1"></circle>
      <circle cx="5" cy="15" r="1"></circle>
    </svg>
  );
});

GripHorizontal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GripHorizontal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GripHorizontal.displayName = "GripHorizontal";
