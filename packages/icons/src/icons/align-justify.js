import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignJustify = forwardRef(function AlignJustify(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
});

AlignJustify.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignJustify.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignJustify.displayName = "AlignJustify";
