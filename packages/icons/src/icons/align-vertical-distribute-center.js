import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignVerticalDistributeCenter = forwardRef(
  function AlignVerticalDistributeCenter(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="5" y="14" width="14" height="6" rx="2"></rect>
        <rect x="7" y="4" width="10" height="6" rx="2"></rect>
        <path d="M22 7h-5"></path>
        <path d="M7 7H1"></path>
        <path d="M22 17h-3"></path>
        <path d="M5 17H2"></path>
      </svg>
    );
  }
);

AlignVerticalDistributeCenter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignVerticalDistributeCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignVerticalDistributeCenter.displayName = "AlignVerticalDistributeCenter";
