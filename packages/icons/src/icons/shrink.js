import React, { forwardRef } from "react";
import p from "prop-types";
export const Shrink = forwardRef(function Shrink(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 15l6 6m-6-6v4.8m0-4.8h4.8"></path>
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"></path>
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6"></path>
      <path d="M9 4.2V9m0 0H4.2M9 9L3 3"></path>
    </svg>
  );
});

Shrink.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Shrink.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Shrink.displayName = "Shrink";
