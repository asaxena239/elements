import React, { forwardRef } from "react";
import p from "prop-types";
export const MousePointer2 = forwardRef(function MousePointer2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 4l7.07 17 2.51-7.39L21 11.07z"></path>
    </svg>
  );
});

MousePointer2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MousePointer2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MousePointer2.displayName = "MousePointer2";
