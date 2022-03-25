import React, { forwardRef } from "react";
import p from "prop-types";
export const CheckCircle2 = forwardRef(function CheckCircle2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );
});

CheckCircle2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CheckCircle2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CheckCircle2.displayName = "CheckCircle2";
