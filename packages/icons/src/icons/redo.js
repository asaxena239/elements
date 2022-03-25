import React, { forwardRef } from "react";
import p from "prop-types";
export const Redo = forwardRef(function Redo(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 7v6h-6"></path>
      <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"></path>
    </svg>
  );
});

Redo.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Redo.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Redo.displayName = "Redo";
