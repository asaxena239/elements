import React, { forwardRef } from "react";
import p from "prop-types";
export const GitCommit = forwardRef(function GitCommit(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="3" y1="12" x2="9" y2="12"></line>
      <line x1="15" y1="12" x2="21" y2="12"></line>
    </svg>
  );
});

GitCommit.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GitCommit.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GitCommit.displayName = "GitCommit";
