import React, { forwardRef } from "react";
import p from "prop-types";
export const Copyright = forwardRef(function Copyright(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15 9.354a4 4 0 100 5.292"></path>
    </svg>
  );
});

Copyright.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Copyright.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Copyright.displayName = "Copyright";
