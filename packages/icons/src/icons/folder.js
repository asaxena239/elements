import React, { forwardRef } from "react";
import p from "prop-types";
export const Folder = forwardRef(function Folder(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path>
    </svg>
  );
});

Folder.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Folder.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Folder.displayName = "Folder";
