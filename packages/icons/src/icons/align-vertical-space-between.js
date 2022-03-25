import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignVerticalSpaceBetween = forwardRef(
  function AlignVerticalSpaceBetween(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="5" y="15" width="14" height="6" rx="2"></rect>
        <rect x="7" y="3" width="10" height="6" rx="2"></rect>
        <path d="M2 21h20"></path>
        <path d="M2 3h20"></path>
      </svg>
    );
  }
);

AlignVerticalSpaceBetween.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignVerticalSpaceBetween.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignVerticalSpaceBetween.displayName = "AlignVerticalSpaceBetween";
