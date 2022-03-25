import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignCenter = forwardRef(function AlignCenter(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="17" y1="12" x2="7" y2="12"></line>
      <line x1="19" y1="18" x2="5" y2="18"></line>
    </svg>
  );
});

AlignCenter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignCenter.displayName = "AlignCenter";
