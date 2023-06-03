// globalThis.AbortController = AbortController;
// const { wrapper } = require("../redux/store");

import type { AppProps } from 'next/app';
 
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
  <h1>_APP Layout</h1>
  <Component {...pageProps} />
  </>
}

export default MyApp;
// export default wrapper.withRedux(MyApp);