import React, { forwardRef } from "react";
import p from "prop-types";
export const Award = forwardRef(function Award(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
});

Award.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Award.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Award.displayName = "Award";
