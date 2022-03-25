import React, { forwardRef } from "react";
import p from "prop-types";
export const Slack = forwardRef(function Slack(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <rect x="13" y="2" width="3" height="8" rx="1.5"></rect>
      <path d="M19 8.5V10h1.5A1.5 1.5 0 1019 8.5"></path>
      <rect x="8" y="14" width="3" height="8" rx="1.5"></rect>
      <path d="M5 15.5V14H3.5A1.5 1.5 0 105 15.5"></path>
      <rect x="14" y="13" width="8" height="3" rx="1.5"></rect>
      <path d="M15.5 19H14v1.5a1.5 1.5 0 101.5-1.5"></path>
      <rect x="2" y="8" width="8" height="3" rx="1.5"></rect>
      <path d="M8.5 5H10V3.5A1.5 1.5 0 108.5 5"></path>
    </svg>
  );
});

Slack.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

Slack.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

Slack.displayName = "Slack";
