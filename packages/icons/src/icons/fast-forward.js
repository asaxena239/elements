import React, { forwardRef } from "react";
import p from "prop-types";
export const FastForward = forwardRef(function FastForward(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="13 19 22 12 13 5 13 19"></polygon>
      <polygon points="2 19 11 12 2 5 2 19"></polygon>
    </svg>
  );
});

FastForward.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FastForward.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FastForward.displayName = "FastForward";
