import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps,  } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Documents() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/next.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: [initialProps.styles, sheet.getStyleElement()],
//       };
//     } finally {
//       sheet.seal();
//     }
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <link rel="icon" href="/next.svg" />
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//           <link
//             href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <h1>DOCUMENT TITLE</h1>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }


