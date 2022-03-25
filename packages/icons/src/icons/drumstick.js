import React, { forwardRef } from "react";
import p from "prop-types";
export const Drumstick = forwardRef(function Drumstick(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z"></path>
      <path d="M11.25 15.6l-2.16 2.16a2.5 2.5 0 11-4.56 1.73 2.49 2.49 0 01-1.41-4.24 2.5 2.5 0 013.14-.32l2.16-2.16"></path>
    </svg>
  );
});

Drumstick.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Drumstick.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Drumstick.displayName = "Drumstick";
