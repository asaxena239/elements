import React, { forwardRef } from "react";
import p from "prop-types";
export const Code = forwardRef(function Code(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
});

Code.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Code.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Code.displayName = "Code";
