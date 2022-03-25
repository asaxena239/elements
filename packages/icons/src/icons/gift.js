import React, { forwardRef } from "react";
import p from "prop-types";
export const Gift = forwardRef(function Gift(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"></path>
    </svg>
  );
});

Gift.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Gift.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Gift.displayName = "Gift";
