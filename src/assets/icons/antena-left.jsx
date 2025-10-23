import * as React from "react";
const AntenaLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 111 56"
    fill="none"
    {...props}
  >
    <g filter="url(#filter0_f_1786_322)">
      <circle
        cx={28}
        cy={28}
        r={8}
        transform="rotate(90 28 28)"
        stroke="#D766B4"
        strokeWidth={10}
      />
    </g>
    <circle
      cx={28}
      cy={28}
      r={7}
      transform="rotate(90 28 28)"
      stroke="#D766B4"
      strokeWidth={4}
    />
    <circle
      cx={28}
      cy={28}
      r={7}
      transform="rotate(90 28 28)"
      stroke="white"
      strokeWidth={2}
    />
    <rect
      x={111}
      y={27}
      width={2}
      height={77}
      rx={1}
      transform="rotate(90 111 27)"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_f_1786_322"
        x={0}
        y={0}
        width={56}
        height={56}
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
          stdDeviation={7.5}
          result="effect1_foregroundBlur_1786_322"
        />
      </filter>
    </defs>
  </svg>
);
export default AntenaLeft;
