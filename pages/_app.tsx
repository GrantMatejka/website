import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  const defaultLayout = ((page: ReactElement) => {
    return <>
      <Header />
      <div className='container'>
        {page}
      </div>
    </>;
  });

  const getLayout = Component.getLayout ?? defaultLayout;

  return getLayout(<Component {...pageProps} />);
}
