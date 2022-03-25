import React, { forwardRef } from "react";
import p from "prop-types";
export const Radio = forwardRef(function Radio(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"></path>
    </svg>
  );
});

Radio.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Radio.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Radio.displayName = "Radio";
