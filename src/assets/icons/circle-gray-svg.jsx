import * as React from "react";
const CircleGray = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 356 356"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_d_1784_272)">
      <circle cx={178} cy={178} r={76} fill="#2D2D2D" />
    </g>
    <defs>
      <filter
        id="filter0_d_1784_272"
        x={0}
        y={0}
        width={356}
        height={356}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1784_272"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={50} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.94902 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.6 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1784_272"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1784_272"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default CircleGray;
