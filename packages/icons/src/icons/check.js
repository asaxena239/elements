import React, { forwardRef } from "react";
import p from "prop-types";
export const Check = forwardRef(function Check(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
});

Check.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Check.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Check.displayName = "Check";
