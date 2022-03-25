import React, { forwardRef } from "react";
import p from "prop-types";
export const Axe = forwardRef(function Axe(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M14 12l-8.501 8.501a2.12 2.12 0 01-2.998 0h-.002a2.12 2.12 0 010-2.998L11 9.002"></path>
      <path d="M9 7l4-4 6 6h3l-.13.648a7.648 7.648 0 01-5.081 5.756L15 16v-3z"></path>
    </svg>
  );
});

Axe.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Axe.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Axe.displayName = "Axe";
