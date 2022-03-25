import React, { forwardRef } from "react";
import p from "prop-types";
export const MountainSnow = forwardRef(function MountainSnow(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path>
    </svg>
  );
});

MountainSnow.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

MountainSnow.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

MountainSnow.displayName = "MountainSnow";
