import React, { forwardRef } from "react";
import p from "prop-types";
export const Twitch = forwardRef(function Twitch(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>
  );
});

Twitch.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Twitch.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Twitch.displayName = "Twitch";
