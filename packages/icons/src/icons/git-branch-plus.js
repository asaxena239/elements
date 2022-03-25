import React, { forwardRef } from "react";
import p from "prop-types";
export const GitBranchPlus = forwardRef(function GitBranchPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 3v12"></path>
      <path d="M18 9a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M6 21a3 3 0 100-6 3 3 0 000 6z"></path>
      <path d="M15 6a9 9 0 00-9 9"></path>
      <path d="M18 15v6"></path>
      <path d="M21 18h-6"></path>
    </svg>
  );
});

GitBranchPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GitBranchPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GitBranchPlus.displayName = "GitBranchPlus";
