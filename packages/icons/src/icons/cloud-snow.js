import React, { forwardRef } from "react";
import p from "prop-types";
export const CloudSnow = forwardRef(function CloudSnow(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9"></path>
      <path d="M8 15h0"></path>
      <path d="M8 19h0"></path>
      <path d="M12 17h0"></path>
      <path d="M12 21h0"></path>
      <path d="M16 15h0"></path>
      <path d="M16 19h0"></path>
    </svg>
  );
});

CloudSnow.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CloudSnow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CloudSnow.displayName = "CloudSnow";
