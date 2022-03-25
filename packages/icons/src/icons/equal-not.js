import React, { forwardRef } from "react";
import p from "prop-types";
export const EqualNot = forwardRef(function EqualNot(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="5" y1="9" x2="19" y2="9"></line>
      <line x1="5" y1="15" x2="19" y2="15"></line>
      <line x1="19" y1="5" x2="5" y2="19"></line>
    </svg>
  );
});

EqualNot.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

EqualNot.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

EqualNot.displayName = "EqualNot";
