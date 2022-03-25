import React, { forwardRef } from "react";
import p from "prop-types";
export const FlagTriangleLeft = forwardRef(function FlagTriangleLeft(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 22V2L7 7l10 5"></path>
    </svg>
  );
});

FlagTriangleLeft.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FlagTriangleLeft.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FlagTriangleLeft.displayName = "FlagTriangleLeft";
