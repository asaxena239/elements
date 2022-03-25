import React, { forwardRef } from "react";
import p from "prop-types";
export const Ruler = forwardRef(function Ruler(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 2l6 6L8 22l-6-6L16 2"></path>
      <path d="M7.5 10.5l2 2"></path>
      <path d="M10.5 7.5l2 2"></path>
      <path d="M13.5 4.5l2 2"></path>
      <path d="M4.5 13.5l2 2"></path>
    </svg>
  );
});

Ruler.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Ruler.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Ruler.displayName = "Ruler";
