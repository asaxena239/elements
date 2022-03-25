import React, { forwardRef } from "react";
import p from "prop-types";
export const Video = forwardRef(function Video(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );
});

Video.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Video.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Video.displayName = "Video";
