import React, { forwardRef } from "react";
import p from "prop-types";
export const Filter = forwardRef(function Filter(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
});

Filter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Filter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Filter.displayName = "Filter";
