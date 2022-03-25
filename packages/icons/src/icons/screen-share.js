import React, { forwardRef } from "react";
import p from "prop-types";
export const ScreenShare = forwardRef(function ScreenShare(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3"></path>
      <path d="M8 21h8"></path>
      <path d="M12 17v4"></path>
      <path d="M17 8l5-5"></path>
      <path d="M17 3h5v5"></path>
    </svg>
  );
});

ScreenShare.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ScreenShare.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ScreenShare.displayName = "ScreenShare";
