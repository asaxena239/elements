import React, { forwardRef } from "react";
import p from "prop-types";
export const Option = forwardRef(function Option(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 3h6l6 18h6"></path>
      <path d="M14 3h7"></path>
    </svg>
  );
});

Option.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Option.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Option.displayName = "Option";
