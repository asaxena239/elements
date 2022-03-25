import React, { forwardRef } from "react";
import p from "prop-types";
export const BookmarkMinus = forwardRef(function BookmarkMinus(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
      <line x1="15" x2="9" y1="10" y2="10"></line>
    </svg>
  );
});

BookmarkMinus.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

BookmarkMinus.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

BookmarkMinus.displayName = "BookmarkMinus";
