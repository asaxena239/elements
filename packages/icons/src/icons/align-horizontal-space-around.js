import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignHorizontalSpaceAround = forwardRef(
  function AlignHorizontalSpaceAround(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="9" y="7" width="6" height="10" rx="2"></rect>
        <path d="M4 22V2"></path>
        <path d="M20 22V2"></path>
      </svg>
    );
  }
);

AlignHorizontalSpaceAround.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignHorizontalSpaceAround.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignHorizontalSpaceAround.displayName = "AlignHorizontalSpaceAround";
