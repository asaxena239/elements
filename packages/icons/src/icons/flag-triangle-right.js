import React, { forwardRef } from "react";
import p from "prop-types";
export const FlagTriangleRight = forwardRef(function FlagTriangleRight(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 22V2l10 5-10 5"></path>
    </svg>
  );
});

FlagTriangleRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FlagTriangleRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FlagTriangleRight.displayName = "FlagTriangleRight";
