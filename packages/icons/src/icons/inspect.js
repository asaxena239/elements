import React, { forwardRef } from "react";
import p from "prop-types";
export const Inspect = forwardRef(function Inspect(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 11V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13a2 2 0 002 2h7"></path>
      <path d="M12 12l4.166 10 1.48-4.355L22 16.166 12 12z"></path>
      <path d="M18 18l3 3"></path>
    </svg>
  );
});

Inspect.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Inspect.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Inspect.displayName = "Inspect";
