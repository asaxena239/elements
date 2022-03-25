import React, { forwardRef } from "react";
import p from "prop-types";
export const FolderOpen = forwardRef(function FolderOpen(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M6 17l2-5h14l-3 8a2 2 0 01-2 1H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h7a2 2 0 012 2v4"></path>
    </svg>
  );
});

FolderOpen.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FolderOpen.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FolderOpen.displayName = "FolderOpen";
