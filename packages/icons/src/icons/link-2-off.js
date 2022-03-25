import React, { forwardRef } from "react";
import p from "prop-types";
export const Link2Off = forwardRef(function Link2Off(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 7h2a5 5 0 014 8M9 17H7A5 5 0 017 7"></path>
      <line x1="8" y1="12" x2="12" y2="12"></line>
      <line x1="2" y1="2" x2="22" y2="22"></line>
    </svg>
  );
});

Link2Off.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Link2Off.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Link2Off.displayName = "Link2Off";
