import * as React from "react";
const SombraAzul = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1764 30"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_f_2207_152)">
      <path
        d="M15 15H1748.33"
        stroke="#285EFE"
        strokeWidth={10}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_2207_152"
        x={0}
        y={0}
        width={1763.33}
        height={30}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={5}
          result="effect1_foregroundBlur_2207_152"
        />
      </filter>
    </defs>
  </svg>
);
export default SombraAzul;
