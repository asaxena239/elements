import React, { forwardRef } from "react";
import p from "prop-types";
export const PauseOctagon = forwardRef(function PauseOctagon(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 15V9"></path>
      <path d="M14 15V9"></path>
      <path d="M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z"></path>
    </svg>
  );
});

PauseOctagon.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PauseOctagon.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PauseOctagon.displayName = "PauseOctagon";
