import React, { forwardRef } from "react";
import p from "prop-types";
export const FolderMinus = forwardRef(function FolderMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path>
      <line x1="9" y1="14" x2="15" y2="14"></line>
    </svg>
  );
});

FolderMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FolderMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FolderMinus.displayName = "FolderMinus";
