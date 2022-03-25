import React, { forwardRef } from "react";
import p from "prop-types";
export const ThumbsUp = forwardRef(function ThumbsUp(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"></path>
    </svg>
  );
});

ThumbsUp.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ThumbsUp.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ThumbsUp.displayName = "ThumbsUp";
