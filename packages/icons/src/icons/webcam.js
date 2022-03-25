import React, { forwardRef } from "react";
import p from "prop-types";
export const Webcam = forwardRef(function Webcam(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="10" r="8"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M12 22v-4m-5 4h5-5zm10 0h-5 5z"></path>
    </svg>
  );
});

Webcam.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Webcam.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Webcam.displayName = "Webcam";
