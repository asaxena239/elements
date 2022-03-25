import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignVerticalSpaceAround = forwardRef(
  function AlignVerticalSpaceAround(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="7" y="9" width="10" height="6" rx="2"></rect>
        <path d="M22 20H2"></path>
        <path d="M22 4H2"></path>
      </svg>
    );
  }
);

AlignVerticalSpaceAround.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignVerticalSpaceAround.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignVerticalSpaceAround.displayName = "AlignVerticalSpaceAround";
