import React, { forwardRef } from "react";
import p from "prop-types";
export const Cookie = forwardRef(function Cookie(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5"></path>
      <path d="M8.5 8.5v.01"></path>
      <path d="M16 15.5v.01"></path>
      <path d="M12 12v.01"></path>
      <path d="M11 17v.01"></path>
      <path d="M7 14v.01"></path>
    </svg>
  );
});

Cookie.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Cookie.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Cookie.displayName = "Cookie";
