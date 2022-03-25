import React, { forwardRef } from "react";
import p from "prop-types";
export const Rewind = forwardRef(function Rewind(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="11 19 2 12 11 5 11 19"></polygon>
      <polygon points="22 19 13 12 22 5 22 19"></polygon>
    </svg>
  );
});

Rewind.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Rewind.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Rewind.displayName = "Rewind";
