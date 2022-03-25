import React, { forwardRef } from "react";
import p from "prop-types";
export const Settings2 = forwardRef(function Settings2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M20 7h-9"></path>
      <path d="M14 17H5"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>
  );
});

Settings2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Settings2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Settings2.displayName = "Settings2";
