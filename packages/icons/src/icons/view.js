import React, { forwardRef } from "react";
import p from "prop-types";
export const View = forwardRef(function View(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"></path>
      <path d="M12 13a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M21 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3m18 8v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3"></path>
    </svg>
  );
});

View.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

View.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

View.displayName = "View";
