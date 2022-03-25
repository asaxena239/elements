import React, { forwardRef } from "react";
import p from "prop-types";
export const LayoutTemplate = forwardRef(function LayoutTemplate(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21 3H3v7h18V3z"></path>
      <path d="M21 14h-5v7h5v-7z"></path>
      <path d="M12 14H3v7h9v-7z"></path>
    </svg>
  );
});

LayoutTemplate.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

LayoutTemplate.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

LayoutTemplate.displayName = "LayoutTemplate";
