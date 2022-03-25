import React, { forwardRef } from "react";
import p from "prop-types";
export const CornerRightDown = forwardRef(function CornerRightDown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="10 15 15 20 20 15"></polyline>
      <path d="M4 4h7a4 4 0 014 4v12"></path>
    </svg>
  );
});

CornerRightDown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CornerRightDown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CornerRightDown.displayName = "CornerRightDown";
