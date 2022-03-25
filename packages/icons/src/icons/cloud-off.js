import React, { forwardRef } from "react";
import p from "prop-types";
export const CloudOff = forwardRef(function CloudOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 2l20 20"></path>
      <path d="M10 5a7 7 0 015.7 5h1.8a4.5 4.5 0 014 6.5"></path>
      <path d="M18.8 18.8c-.4.2-.8.2-1.3.2H9A7 7 0 015.8 5.8"></path>
    </svg>
  );
});

CloudOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CloudOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CloudOff.displayName = "CloudOff";
