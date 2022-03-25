import React, { forwardRef } from "react";
import p from "prop-types";
export const Edit2 = forwardRef(function Edit2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
});

Edit2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Edit2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Edit2.displayName = "Edit2";
