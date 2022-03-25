import React, { forwardRef } from "react";
import p from "prop-types";
export const ShieldClose = forwardRef(function ShieldClose(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <line x1="9.5" y1="9" x2="14.5" y2="14"></line>
      <line x1="14.5" y1="9" x2="9.5" y2="14"></line>
    </svg>
  );
});

ShieldClose.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ShieldClose.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ShieldClose.displayName = "ShieldClose";
