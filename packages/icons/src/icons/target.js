import React, { forwardRef } from "react";
import p from "prop-types";
export const Target = forwardRef(function Target(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
});

Target.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Target.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Target.displayName = "Target";
