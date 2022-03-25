import React, { forwardRef } from "react";
import p from "prop-types";
export const Superscript = forwardRef(function Superscript(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M4 19l8-8"></path>
      <path d="M12 19l-8-8"></path>
      <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 00-2.617-.436c-.42.239-.738.614-.899 1.06"></path>
    </svg>
  );
});

Superscript.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Superscript.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Superscript.displayName = "Superscript";
