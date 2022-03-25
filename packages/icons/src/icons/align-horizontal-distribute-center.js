import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignHorizontalDistributeCenter = forwardRef(
  function AlignHorizontalDistributeCenter(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="4" y="5" width="6" height="14" rx="2"></rect>
        <rect x="14" y="7" width="6" height="10" rx="2"></rect>
        <path d="M17 22v-5"></path>
        <path d="M17 7V2"></path>
        <path d="M7 22v-3"></path>
        <path d="M7 5V2"></path>
      </svg>
    );
  }
);

AlignHorizontalDistributeCenter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignHorizontalDistributeCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignHorizontalDistributeCenter.displayName = "AlignHorizontalDistributeCenter";
