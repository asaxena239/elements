import React, { forwardRef } from "react";
import p from "prop-types";
export const Mountain = forwardRef(function Mountain(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
    </svg>
  );
});

Mountain.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Mountain.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Mountain.displayName = "Mountain";
