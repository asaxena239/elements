import React, { forwardRef } from "react";
import p from "prop-types";
export const Trello = forwardRef(function Trello(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <rect x="7" y="7" width="3" height="9"></rect>
      <rect x="14" y="7" width="3" height="5"></rect>
    </svg>
  );
});

Trello.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Trello.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Trello.displayName = "Trello";
