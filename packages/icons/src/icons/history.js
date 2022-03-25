import React, { forwardRef } from "react";
import p from "prop-types";
export const History = forwardRef(function History(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M3 3v5h5"></path>
      <path d="M3.05 13A9 9 0 106 5.3L3 8"></path>
      <path d="M12 7v5l4 2"></path>
    </svg>
  );
});

History.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

History.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

History.displayName = "History";
