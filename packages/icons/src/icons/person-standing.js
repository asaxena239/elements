import React, { forwardRef } from "react";
import p from "prop-types";
export const PersonStanding = forwardRef(function PersonStanding(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <circle cx="12" cy="5" r="1"></circle>
      <path d="M9 20l3-6 3 6"></path>
      <path d="M6 8l6 2 6-2"></path>
      <path d="M12 10v4"></path>
    </svg>
  );
});

PersonStanding.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PersonStanding.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PersonStanding.displayName = "PersonStanding";
