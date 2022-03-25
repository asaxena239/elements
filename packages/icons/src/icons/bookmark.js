import React, { forwardRef } from "react";
import p from "prop-types";
export const Bookmark = forwardRef(function Bookmark(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
    </svg>
  );
});

Bookmark.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Bookmark.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Bookmark.displayName = "Bookmark";
