import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { colors } from '../utils/colors';

class MyDocument extends Document {
   /**
    * https://styled-components.com/docs/advanced#nextjs
    */
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
            });
         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html lang="en">
            <Head>
               {/** Favicon */}
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/images/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/images/favicon-16x16.png"
               />
            </Head>
            <body
               style={{
                  backgroundColor: colors.white,
                  color: colors.black,
                  padding: 0,
                  margin: 0,
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
               }}
            >
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
