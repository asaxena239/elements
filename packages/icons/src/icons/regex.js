import React, { forwardRef } from "react";
import p from "prop-types";
export const Regex = forwardRef(function Regex(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 3v10"></path>
      <path d="M12.67 5.5l8.66 5"></path>
      <path d="M12.67 10.5l8.66-5"></path>
      <path d="M9 17a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2z"></path>
    </svg>
  );
});

Regex.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Regex.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Regex.displayName = "Regex";
