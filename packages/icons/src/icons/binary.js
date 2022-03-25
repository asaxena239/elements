import React, { forwardRef } from "react";
import p from "prop-types";
export const Binary = forwardRef(function Binary(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 4H6v6h4V4z"></path>
      <path d="M18 14h-4v6h4v-6z"></path>
      <path d="M14 4h2v6m-2 0h4"></path>
      <path d="M6 14h2v6m-2 0h4"></path>
    </svg>
  );
});

Binary.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Binary.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Binary.displayName = "Binary";
