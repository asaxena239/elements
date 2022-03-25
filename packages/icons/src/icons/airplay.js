import React, { forwardRef } from "react";
import p from "prop-types";
export const Airplay = forwardRef(function Airplay(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"></path>
      <polygon points="12 15 17 21 7 21 12 15"></polygon>
    </svg>
  );
});

Airplay.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Airplay.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Airplay.displayName = "Airplay";
