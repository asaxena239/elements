import React, { forwardRef } from "react";
import p from "prop-types";
export const PlugZap = forwardRef(function PlugZap(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M13 2l-2 2.5h3L12 7"></path>
      <path d="M12 22v-3"></path>
      <path d="M10 13v-2.5"></path>
      <path d="M10 12.5v-2"></path>
      <path d="M14 12.5v-2"></path>
      <path d="M16 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2v-2z"></path>
    </svg>
  );
});

PlugZap.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

PlugZap.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

PlugZap.displayName = "PlugZap";
