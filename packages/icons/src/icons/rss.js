import React, { forwardRef } from "react";
import p from "prop-types";
export const Rss = forwardRef(function Rss(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 11a9 9 0 019 9"></path>
      <path d="M4 4a16 16 0 0116 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>
  );
});

Rss.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Rss.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Rss.displayName = "Rss";
