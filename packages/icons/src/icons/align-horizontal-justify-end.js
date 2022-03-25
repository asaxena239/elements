import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignHorizontalJustifyEnd = forwardRef(
  function AlignHorizontalJustifyEnd(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="2" y="5" width="6" height="14" rx="2"></rect>
        <rect x="12" y="7" width="6" height="10" rx="2"></rect>
        <path d="M22 2v20"></path>
      </svg>
    );
  }
);

AlignHorizontalJustifyEnd.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignHorizontalJustifyEnd.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignHorizontalJustifyEnd.displayName = "AlignHorizontalJustifyEnd";
