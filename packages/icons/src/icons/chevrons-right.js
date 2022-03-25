import React, { forwardRef } from "react";
import p from "prop-types";
export const ChevronsRight = forwardRef(function ChevronsRight(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </svg>
  );
});

ChevronsRight.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ChevronsRight.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ChevronsRight.displayName = "ChevronsRight";
