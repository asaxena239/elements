import React, { forwardRef } from "react";
import p from "prop-types";
export const MousePointerClick = forwardRef(function MousePointerClick(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 9l5 12 1.774-5.226L21 14 9 9z"></path>
      <path d="M16.071 16.071l4.243 4.243"></path>
      <path d="M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
    </svg>
  );
});

MousePointerClick.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MousePointerClick.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MousePointerClick.displayName = "MousePointerClick";
