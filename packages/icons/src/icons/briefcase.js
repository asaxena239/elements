import React, { forwardRef } from "react";
import p from "prop-types";
export const Briefcase = forwardRef(function Briefcase(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
    </svg>
  );
});

Briefcase.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Briefcase.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Briefcase.displayName = "Briefcase";
