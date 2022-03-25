import React, { forwardRef } from "react";
import p from "prop-types";
export const FormInput = forwardRef(function FormInput(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
      <path d="M12 12h.01"></path>
      <path d="M17 12h.01"></path>
      <path d="M7 12h.01"></path>
    </svg>
  );
});

FormInput.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

FormInput.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

FormInput.displayName = "FormInput";
