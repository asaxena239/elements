import React, { forwardRef } from "react";
import p from "prop-types";
export const Gamepad2 = forwardRef(function Gamepad2(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <line x1="6" y1="11" x2="10" y2="11"></line>
      <line x1="8" y1="9" x2="8" y2="13"></line>
      <line x1="15" y1="12" x2="15.01" y2="12"></line>
      <line x1="18" y1="10" x2="18.01" y2="10"></line>
      <path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"></path>
    </svg>
  );
});

Gamepad2.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Gamepad2.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Gamepad2.displayName = "Gamepad2";
