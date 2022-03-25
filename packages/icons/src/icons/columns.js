import React, { forwardRef } from "react";
import p from "prop-types";
export const Columns = forwardRef(function Columns(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="12" y1="3" x2="12" y2="21"></line>
    </svg>
  );
});

Columns.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Columns.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Columns.displayName = "Columns";
