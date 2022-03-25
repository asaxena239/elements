import React, { forwardRef } from "react";
import p from "prop-types";
export const Bluetooth = forwardRef(function Bluetooth(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 7l10 10-5 5V2l5 5L7 17"></path>
    </svg>
  );
});

Bluetooth.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bluetooth.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bluetooth.displayName = "Bluetooth";
