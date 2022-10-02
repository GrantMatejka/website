import '../styles/globals.css';

import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  const defaultLayout = ((page) => {
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
