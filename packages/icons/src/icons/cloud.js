import React, { forwardRef } from "react";
import p from "prop-types";
export const Cloud = forwardRef(function Cloud(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17.5 19a4.5 4.5 0 100-9h-1.8A7 7 0 109 19h8.5z"></path>
    </svg>
  );
});

Cloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Cloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Cloud.displayName = "Cloud";
