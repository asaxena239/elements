import React, { forwardRef } from "react";
import p from "prop-types";
export const Plus = forwardRef(function Plus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
});

Plus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Plus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Plus.displayName = "Plus";
