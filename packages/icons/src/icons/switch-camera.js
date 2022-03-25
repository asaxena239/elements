import React, { forwardRef } from "react";
import p from "prop-types";
export const SwitchCamera = forwardRef(function SwitchCamera(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M11 19H4a2 2 0 01-2-2V7a2 2 0 012-2h5"></path>
      <path d="M13 5h7a2 2 0 012 2v10a2 2 0 01-2 2h-5"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M18 22l-3-3 3-3"></path>
      <path d="M6 2l3 3-3 3"></path>
    </svg>
  );
});

SwitchCamera.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SwitchCamera.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SwitchCamera.displayName = "SwitchCamera";
