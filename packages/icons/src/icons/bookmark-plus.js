import React, { forwardRef } from "react";
import p from "prop-types";
export const BookmarkPlus = forwardRef(function BookmarkPlus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
      <line x1="12" x2="12" y1="7" y2="13"></line>
      <line x1="15" x2="9" y1="10" y2="10"></line>
    </svg>
  );
});

BookmarkPlus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BookmarkPlus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BookmarkPlus.displayName = "BookmarkPlus";
