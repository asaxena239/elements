import React, { forwardRef } from "react";
import p from "prop-types";
export const Table = forwardRef(function Table(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="3" y1="15" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="21"></line>
    </svg>
  );
});

Table.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Table.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Table.displayName = "Table";
