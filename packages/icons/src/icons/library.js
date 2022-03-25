import React, { forwardRef } from "react";
import p from "prop-types";
export const Library = forwardRef(function Library(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M16 6l4 14"></path>
      <path d="M12 6v14"></path>
      <path d="M8 8v12"></path>
      <path d="M4 4v16"></path>
    </svg>
  );
});

Library.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Library.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Library.displayName = "Library";
