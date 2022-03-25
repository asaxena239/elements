import React, { forwardRef } from "react";
import p from "prop-types";
export const Contact = forwardRef(function Contact(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z"></path>
      <line x1="16" y1="2" x2="16" y2="4"></line>
      <line x1="8" y1="2" x2="8" y2="4"></line>
      <circle cx="12" cy="11" r="3"></circle>
      <path d="M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5"></path>
    </svg>
  );
});

Contact.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Contact.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Contact.displayName = "Contact";
