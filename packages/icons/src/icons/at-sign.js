import React, { forwardRef } from "react";
import p from "prop-types";
export const AtSign = forwardRef(function AtSign(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"></path>
    </svg>
  );
});

AtSign.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AtSign.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AtSign.displayName = "AtSign";
