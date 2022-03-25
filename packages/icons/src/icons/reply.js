import React, { forwardRef } from "react";
import p from "prop-types";
export const Reply = forwardRef(function Reply(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="9 17 4 12 9 7"></polyline>
      <path d="M20 18v-2a4 4 0 00-4-4H4"></path>
    </svg>
  );
});

Reply.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Reply.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Reply.displayName = "Reply";
