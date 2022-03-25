import React, { forwardRef } from "react";
import p from "prop-types";
export const SkipForward = forwardRef(function SkipForward(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="5 4 15 12 5 20 5 4"></polygon>
      <line x1="19" y1="5" x2="19" y2="19"></line>
    </svg>
  );
});

SkipForward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SkipForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SkipForward.displayName = "SkipForward";
