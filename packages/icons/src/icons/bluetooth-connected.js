import React, { forwardRef } from "react";
import p from "prop-types";
export const BluetoothConnected = forwardRef(function BluetoothConnected(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 7l10 10-5 5V2l5 5L7 17"></path>
      <line x1="18" y1="12" y2="12" x2="21"></line>
      <line x1="3" y1="12" y2="12" x2="6"></line>
    </svg>
  );
});

BluetoothConnected.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BluetoothConnected.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BluetoothConnected.displayName = "BluetoothConnected";
