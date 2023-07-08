import * as React from "react"
import { SVGProps } from "react"

const HomeSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 0a6 6 0 0 0-6 6v26a6 6 0 0 0 6 6h26a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6Zm9.933 21.36v8.195H9.1V18.627H5L18.667 6.333l13.666 12.294h-4.1v10.928H21.4V21.36h-5.467Z"
      clipRule="evenodd"
    />
  </svg>
)
export default HomeSvg

