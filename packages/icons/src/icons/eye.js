import React, { forwardRef } from "react";
import p from "prop-types";
export const Eye = forwardRef(function Eye(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
});

Eye.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Eye.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Eye.displayName = "Eye";
