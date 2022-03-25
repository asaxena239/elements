import React, { forwardRef } from "react";
import p from "prop-types";
export const Network = forwardRef(function Network(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="9" y="2" width="6" height="6"></rect>
      <rect x="16" y="16" width="6" height="6"></rect>
      <rect x="2" y="16" width="6" height="6"></rect>
      <path d="M12 8v4m0 0H5v4m7-4h7v4"></path>
    </svg>
  );
});

Network.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Network.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Network.displayName = "Network";
