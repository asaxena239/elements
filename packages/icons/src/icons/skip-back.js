import React, { forwardRef } from "react";
import p from "prop-types";
export const SkipBack = forwardRef(function SkipBack(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="19 20 9 12 19 4 19 20"></polygon>
      <line x1="5" y1="19" x2="5" y2="5"></line>
    </svg>
  );
});

SkipBack.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SkipBack.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SkipBack.displayName = "SkipBack";
