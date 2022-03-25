import React, { forwardRef } from "react";
import p from "prop-types";
export const LightbulbOff = forwardRef(function LightbulbOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
      <path d="M2 2l20 20"></path>
      <path d="M8.91 14a4.61 4.61 0 00-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 01.084-1M9 2.804A6 6 0 0118 8a4.651 4.651 0 01-1.031 3"></path>
    </svg>
  );
});

LightbulbOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LightbulbOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LightbulbOff.displayName = "LightbulbOff";
