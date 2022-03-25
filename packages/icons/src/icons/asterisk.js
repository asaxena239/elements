import React, { forwardRef } from "react";
import p from "prop-types";
export const Asterisk = forwardRef(function Asterisk(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M12 6v12"></path>
      <path d="M17.196 9L6.804 15"></path>
      <path d="M6.804 9l10.392 6"></path>
    </svg>
  );
});

Asterisk.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Asterisk.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Asterisk.displayName = "Asterisk";
