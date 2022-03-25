import React, { forwardRef } from "react";
import p from "prop-types";
export const Unlink2 = forwardRef(function Unlink2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2"></path>
    </svg>
  );
});

Unlink2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Unlink2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Unlink2.displayName = "Unlink2";
