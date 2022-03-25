import React, { forwardRef } from "react";
import p from "prop-types";
export const MoreVertical = forwardRef(function MoreVertical(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
    </svg>
  );
});

MoreVertical.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MoreVertical.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MoreVertical.displayName = "MoreVertical";
