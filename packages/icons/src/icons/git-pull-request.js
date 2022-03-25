import React, { forwardRef } from "react";
import p from "prop-types";
export const GitPullRequest = forwardRef(function GitPullRequest(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M13 6h3a2 2 0 012 2v7"></path>
      <line x1="6" y1="9" x2="6" y2="21"></line>
    </svg>
  );
});

GitPullRequest.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GitPullRequest.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GitPullRequest.displayName = "GitPullRequest";
