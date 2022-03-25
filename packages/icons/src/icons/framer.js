import React, { forwardRef } from "react";
import p from "prop-types";
export const Framer = forwardRef(function Framer(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
    </svg>
  );
});

Framer.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Framer.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Framer.displayName = "Framer";
