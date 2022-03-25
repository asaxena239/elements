import React, { forwardRef } from "react";
import p from "prop-types";
export const CircleSlashed = forwardRef(function CircleSlashed(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M22 2L2 22"></path>
    </svg>
  );
});

CircleSlashed.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CircleSlashed.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CircleSlashed.displayName = "CircleSlashed";
