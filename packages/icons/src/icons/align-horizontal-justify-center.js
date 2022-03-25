import React, { forwardRef } from "react";
import p from "prop-types";
export const AlignHorizontalJustifyCenter = forwardRef(
  function AlignHorizontalJustifyCenter(props, ref) {
    const { color = "currentColor", size = 24, ...rest } = props;
    return (
      <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
        <rect x="2" y="5" width="6" height="14" rx="2"></rect>
        <rect x="16" y="7" width="6" height="10" rx="2"></rect>
        <path d="M12 2v20"></path>
      </svg>
    );
  }
);

AlignHorizontalJustifyCenter.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

AlignHorizontalJustifyCenter.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

AlignHorizontalJustifyCenter.displayName = "AlignHorizontalJustifyCenter";
