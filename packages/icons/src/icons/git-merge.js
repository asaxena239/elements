import React, { forwardRef } from "react";
import p from "prop-types";
export const GitMerge = forwardRef(function GitMerge(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M6 21V9a9 9 0 009 9"></path>
    </svg>
  );
});

GitMerge.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GitMerge.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GitMerge.displayName = "GitMerge";
