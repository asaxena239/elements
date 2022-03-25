import React, { forwardRef } from "react";
import p from "prop-types";
export const Paperclip = forwardRef(function Paperclip(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path>
    </svg>
  );
});

Paperclip.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Paperclip.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Paperclip.displayName = "Paperclip";
