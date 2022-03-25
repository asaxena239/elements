import React, { forwardRef } from "react";
import p from "prop-types";
export const BluetoothSearching = forwardRef(function BluetoothSearching(
  props,
  ref
) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M7 7l10 10-5 5V2l5 5L7 17"></path>
      <path d="M20.83 14.83a4 4 0 000-5.66"></path>
      <path d="M18 12h.01"></path>
    </svg>
  );
});

BluetoothSearching.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BluetoothSearching.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BluetoothSearching.displayName = "BluetoothSearching";
