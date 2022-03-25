import React, { forwardRef } from "react";
import p from "prop-types";
export const Link2 = forwardRef(function Link2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
});

Link2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Link2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Link2.displayName = "Link2";
