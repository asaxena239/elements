import React, { forwardRef } from "react";
import p from "prop-types";
export const ClipboardX = forwardRef(function ClipboardX(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
      <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z"></path>
      <path d="M15 11l-6 6"></path>
      <path d="M9 11l6 6"></path>
    </svg>
  );
});

ClipboardX.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ClipboardX.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ClipboardX.displayName = "ClipboardX";
