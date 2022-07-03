import type { AppProps } from 'next/app';

// import '../styles/globals.less';
// import '~antd/dist/antd.css';
import '../styles/antd.dark-theme.less';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
