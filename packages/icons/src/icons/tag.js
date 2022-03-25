import React, { forwardRef } from "react";
import p from "prop-types";
export const Tag = forwardRef(function Tag(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 12V2h10l9.44 9.44a2 2 0 0 1 0 2.82l-7.18 7.18a2 2 0 0 1-2.82 0L2 12Z"></path>
      <path d="M7 7h.01"></path>
    </svg>
  );
});

Tag.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Tag.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Tag.displayName = "Tag";
