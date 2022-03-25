import React, { forwardRef } from "react";
import p from "prop-types";
export const Album = forwardRef(function Album(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <polyline points="11 3 11 11 14 8 17 11 17 3"></polyline>
    </svg>
  );
});

Album.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Album.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Album.displayName = "Album";
