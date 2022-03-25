import React, { forwardRef } from "react";
import p from "prop-types";
export const Facebook = forwardRef(function Facebook(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  );
});

Facebook.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Facebook.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Facebook.displayName = "Facebook";
