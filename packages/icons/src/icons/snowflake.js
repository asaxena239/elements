import React, { forwardRef } from "react";
import p from "prop-types";
export const Snowflake = forwardRef(function Snowflake(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M20 16l-4-4 4-4"></path>
      <path d="M4 8l4 4-4 4"></path>
      <path d="M16 4l-4 4-4-4"></path>
      <path d="M8 20l4-4 4 4"></path>
    </svg>
  );
});

Snowflake.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Snowflake.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Snowflake.displayName = "Snowflake";
