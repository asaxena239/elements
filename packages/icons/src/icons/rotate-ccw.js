import React, { forwardRef } from "react";
import p from "prop-types";
export const RotateCcw = forwardRef(function RotateCcw(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props;
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M1 4V10H7"></path>
      <path d="M3.51 15C4.15839 16.8404 5.38734 18.4202 7.01166 19.5014C8.63598 20.5826 10.5677 21.1066 12.5157 20.9945C14.4637 20.8824 16.3226 20.1402 17.8121 18.8798C19.3017 17.6193 20.3413 15.909 20.7742 14.0064C21.2072 12.1037 21.0101 10.112 20.2126 8.3311C19.4152 6.55024 18.0605 5.07679 16.3528 4.13276C14.6451 3.18873 12.6769 2.82526 10.7447 3.09711C8.81245 3.36897 7.02091 4.26142 5.64 5.64L1 10"></path>
    </svg>
  );
});

RotateCcw.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
};

RotateCcw.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

RotateCcw.displayName = "RotateCcw";
