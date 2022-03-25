import React, { forwardRef } from "react";
import p from "prop-types";
export const LassoSelect = forwardRef(function LassoSelect(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 22a5 5 0 01-2-4"></path>
      <path d="M7 16.93c.96.43 1.96.74 2.99.91"></path>
      <path d="M3.34 14A6.8 6.8 0 012 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 01-.33 2"></path>
      <path d="M5 18a2 2 0 100-4 2 2 0 000 4z"></path>
      <path d="M14.33 22h-.09a.35.35 0 01-.24-.32v-10a.34.34 0 01.33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 01-.21.59h-4.49l-2.57 3.85a.35.35 0 01-.28.14v0z"></path>
    </svg>
  );
});

LassoSelect.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LassoSelect.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LassoSelect.displayName = "LassoSelect";
