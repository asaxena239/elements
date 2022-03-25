import React, { forwardRef } from "react";
import p from "prop-types";
export const ShieldCheck = forwardRef(function ShieldCheck(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );
});

ShieldCheck.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ShieldCheck.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ShieldCheck.displayName = "ShieldCheck";
