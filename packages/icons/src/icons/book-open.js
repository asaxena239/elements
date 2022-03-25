import React, { forwardRef } from "react";
import p from "prop-types";
export const BookOpen = forwardRef(function BookOpen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
    </svg>
  );
});

BookOpen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BookOpen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BookOpen.displayName = "BookOpen";
