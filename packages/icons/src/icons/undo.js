import React, { forwardRef } from "react";
import p from "prop-types";
export const Undo = forwardRef(function Undo(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 7v6h6"></path>
      <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path>
    </svg>
  );
});

Undo.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Undo.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Undo.displayName = "Undo";
