import * as React from "react";
import { SVGProps } from "react";

const TransactionSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M796.444 0H227.556A227.556 227.556 0 0 0 0 227.556v568.888A227.556 227.556 0 0 0 227.556 1024h568.888A227.556 227.556 0 0 0 1024 796.444V227.556A227.556 227.556 0 0 0 796.444 0zm38.97 476.615a128.284 128.284 0 0 1-117.59 75.207H305.948a13.938 13.938 0 0 0-13.824 15.303l95.176 157.07a57.856 57.856 0 1 1-98.93 59.961L186.368 615.822l-1.934-5.177A129.593 129.593 0 0 1 305.948 436.11h411.876a13.938 13.938 0 0 0 11.378-22.186l-98.475-104.505a57.856 57.856 0 0 1 84.253-79.247l101.603 108.09a128.341 128.341 0 0 1 18.83 138.353z"
      clipRule="evenodd"
    />
  </svg>
);
export default TransactionSvg;
