import React, { forwardRef } from "react";
import p from "prop-types";
export const Podcast = forwardRef(function Podcast(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="11" r="1"></circle>
      <path d="M17.03 18.46a9 9 0 10-10.02.03"></path>
      <path d="M16.06 13.91a5 5 0 10-7.97.2"></path>
      <path d="M11.11 17a.9.9 0 111.78 0l-.52 4.67a.37.37 0 01-.74 0l-.52-4.68z"></path>
    </svg>
  );
});

Podcast.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Podcast.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Podcast.displayName = "Podcast";
