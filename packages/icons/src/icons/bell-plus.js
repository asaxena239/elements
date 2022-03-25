import React, { forwardRef } from "react";
import p from "prop-types";
export const BellPlus = forwardRef(function BellPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916"></path>
      <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      <path d="M18 2v6"></path>
      <path d="M21 5h-6"></path>
    </svg>
  );
});

BellPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BellPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BellPlus.displayName = "BellPlus";
