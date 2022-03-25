import React, { forwardRef } from "react";
import p from "prop-types";
export const ReplyAll = forwardRef(function ReplyAll(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="7 17 2 12 7 7"></polyline>
      <polyline points="12 17 7 12 12 7"></polyline>
      <path d="M22 18v-2a4 4 0 00-4-4H7"></path>
    </svg>
  );
});

ReplyAll.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

ReplyAll.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

ReplyAll.displayName = "ReplyAll";
