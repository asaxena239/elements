import React, { forwardRef } from "react";
import p from "prop-types";
export const Activity = forwardRef(function Activity(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
});

Activity.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Activity.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Activity.displayName = "Activity";
