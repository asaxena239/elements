import React, { forwardRef } from "react";
import p from "prop-types";
export const GraduationCap = forwardRef(function GraduationCap(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  );
});

GraduationCap.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

GraduationCap.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

GraduationCap.displayName = "GraduationCap";
