import React, { forwardRef } from "react";
import p from "prop-types";
export const StarHalf = forwardRef(function StarHalf(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2"></path>
    </svg>
  );
});

StarHalf.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

StarHalf.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

StarHalf.displayName = "StarHalf";
