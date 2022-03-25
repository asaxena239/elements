import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignVerticalJustifyStart = forwardRef(
  function AlignVerticalJustifyStart(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="5" y="16" width="14" height="6" rx="2"></rect>
        <rect x="7" y="6" width="10" height="6" rx="2"></rect>
        <path d="M2 2h20"></path>
      </svg>
    );
  }
);

AlignVerticalJustifyStart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignVerticalJustifyStart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignVerticalJustifyStart.displayName = "AlignVerticalJustifyStart";
