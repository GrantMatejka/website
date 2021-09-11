import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
   render(): ReactElement {
      return (
         <Html lang='en'>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Rubik&family=Urbanist&display=swap" rel="stylesheet" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
