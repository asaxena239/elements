import React, { forwardRef } from "react";
import p from "prop-types";
export const Code2 = forwardRef(function Code2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 16l4-4-4-4"></path>
      <path d="M6 8l-4 4 4 4"></path>
      <path d="M14.5 4l-5 16"></path>
    </svg>
  );
});

Code2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Code2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Code2.displayName = "Code2";
