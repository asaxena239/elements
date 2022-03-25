import React, { forwardRef } from "react";
import p from "prop-types";
export const CloudLightning = forwardRef(function CloudLightning(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8"></path>
      <path d="M12 12l-3 5h5l-3 5"></path>
    </svg>
  );
});

CloudLightning.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

CloudLightning.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

CloudLightning.displayName = "CloudLightning";
