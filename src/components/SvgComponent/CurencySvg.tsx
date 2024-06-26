import * as React from "react";
import { SVGProps } from "react";

const CurrencySvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 280 93"
    {...props}
  >
    <path
      d="M22.4 38.565 0 61.88V73c0 11.046 8.954 20 20 20h230c16.569 0 30-13.431 30-30V20.177c-1.02-.635-2.505-.848-3.136-.897-4.91-.387-7.726 3.304-11.648 6.725l-.049.043c-1.159 1.012-4.059 3.544-9.359 3.544-5.376 0-9.109-2.391-10.304-3.587l-17.92-18.831C225.195 4.783 219.968 0 214.144 0S203.691 4.783 201.6 7.174l-82.88 80.263c-1.344 1.494-5.466 4.483-11.2 4.483-5.734 0-9.856-2.989-11.2-4.483L48.384 36.323c-1.643-1.794-6.451-5.38-12.544-5.38-6.093 0-11.499 5.08-13.44 7.622Z"
      fill="url(#paint0_linear_7_131)"
      fillOpacity={0.2}
    />
    <defs>
      <linearGradient
        id="paint0_linear_7_131"
        x1={140}
        x2={140}
        y1={-8.066}
        y2={108.081}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default CurrencySvg;
