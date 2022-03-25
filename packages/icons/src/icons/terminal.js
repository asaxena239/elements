import React, { forwardRef } from "react";
import p from "prop-types";
export const Terminal = forwardRef(function Terminal(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
});

Terminal.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Terminal.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Terminal.displayName = "Terminal";
