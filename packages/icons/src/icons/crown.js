import React, { forwardRef } from "react";
import p from "prop-types";
export const Crown = forwardRef(function Crown(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
    </svg>
  );
});

Crown.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Crown.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Crown.displayName = "Crown";
