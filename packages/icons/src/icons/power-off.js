import React, { forwardRef } from "react";
import p from "prop-types";
export const PowerOff = forwardRef(function PowerOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19"></path>
      <path d="M12 2v4"></path>
      <path d="M2 2l20 20"></path>
    </svg>
  );
});

PowerOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PowerOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PowerOff.displayName = "PowerOff";
