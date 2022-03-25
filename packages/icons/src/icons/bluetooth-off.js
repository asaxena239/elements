import React, { forwardRef } from "react";
import p from "prop-types";
export const BluetoothOff = forwardRef(function BluetoothOff(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 17l-5 5V12l-5 5"></path>
      <path d="M2 2l20 20"></path>
      <path d="M14.5 9.5L17 7l-5-5v4.5"></path>
    </svg>
  );
});

BluetoothOff.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BluetoothOff.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BluetoothOff.displayName = "BluetoothOff";
