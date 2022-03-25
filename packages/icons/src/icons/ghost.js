import React, { forwardRef } from "react";
import p from "prop-types";
export const Ghost = forwardRef(function Ghost(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 10h.01"></path>
      <path d="M15 10h.01"></path>
      <path d="M12 2a8 8 0 00-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 00-8-8z"></path>
    </svg>
  );
});

Ghost.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Ghost.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Ghost.displayName = "Ghost";
