import React, { forwardRef } from "react";
import p from "prop-types";
export const Megaphone = forwardRef(function Megaphone(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 11l18-5v12L3 14v-3z"></path>
      <path d="M11.6 16.8a3 3 0 11-5.8-1.6"></path>
    </svg>
  );
});

Megaphone.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Megaphone.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Megaphone.displayName = "Megaphone";
