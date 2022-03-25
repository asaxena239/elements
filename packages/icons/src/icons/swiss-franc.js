import React, { forwardRef } from "react";
import p from "prop-types";
export const SwissFranc = forwardRef(function SwissFranc(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M10 21V3h8"></path>
      <path d="M6 16h9"></path>
      <path d="M10 9.5h7"></path>
    </svg>
  );
});

SwissFranc.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

SwissFranc.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

SwissFranc.displayName = "SwissFranc";
