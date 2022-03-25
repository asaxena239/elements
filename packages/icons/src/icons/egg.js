import React, { forwardRef } from "react";
import p from "prop-types";
export const Egg = forwardRef(function Egg(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
    </svg>
  );
});

Egg.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Egg.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Egg.displayName = "Egg";
