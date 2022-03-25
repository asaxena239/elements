import React, { forwardRef } from "react";
import p from "prop-types";
export const Infinity = forwardRef(function Infinity(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"></path>
    </svg>
  );
});

Infinity.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Infinity.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Infinity.displayName = "Infinity";
