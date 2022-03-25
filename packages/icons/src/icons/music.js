import React, { forwardRef } from "react";
import p from "prop-types";
export const Music = forwardRef(function Music(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  );
});

Music.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Music.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Music.displayName = "Music";
