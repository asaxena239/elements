import React, { forwardRef } from "react";
import p from "prop-types";
export const Volume = forwardRef(function Volume(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    </svg>
  );
});

Volume.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Volume.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Volume.displayName = "Volume";
