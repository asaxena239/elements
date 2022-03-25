import React, { forwardRef } from "react";
import p from "prop-types";
export const Droplet = forwardRef(function Droplet(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z"></path>
    </svg>
  );
});

Droplet.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Droplet.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Droplet.displayName = "Droplet";
