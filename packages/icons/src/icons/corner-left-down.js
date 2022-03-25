import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerLeftDown = forwardRef(function CornerLeftDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="14 15 9 20 4 15"></polyline>
      <path d="M20 4h-7a4 4 0 00-4 4v12"></path>
    </svg>
  );
});

CornerLeftDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerLeftDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerLeftDown.displayName = "CornerLeftDown";
