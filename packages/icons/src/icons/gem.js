import React, { forwardRef } from "react";
import p from "prop-types";
export const Gem = forwardRef(function Gem(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polygon points="6 3 18 3 22 9 12 22 2 9"></polygon>
      <path d="M12 22l4-13-3-6"></path>
      <path d="M12 22L8 9l3-6"></path>
      <path d="M2 9h20"></path>
    </svg>
  );
});

Gem.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Gem.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Gem.displayName = "Gem";
