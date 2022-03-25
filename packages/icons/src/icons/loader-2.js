import React, { forwardRef } from "react";
import p from "prop-types";
export const Loader2 = forwardRef(function Loader2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 12a9 9 0 11-6.219-8.56"></path>
    </svg>
  );
});

Loader2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Loader2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Loader2.displayName = "Loader2";
