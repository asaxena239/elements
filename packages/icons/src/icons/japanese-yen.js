import React, { forwardRef } from "react";
import p from "prop-types";
export const JapaneseYen = forwardRef(function JapaneseYen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3"></path>
      <path d="M6 15h12"></path>
      <path d="M6 11h12"></path>
    </svg>
  );
});

JapaneseYen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

JapaneseYen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

JapaneseYen.displayName = "JapaneseYen";
