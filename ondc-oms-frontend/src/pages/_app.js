import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from '../components/layout';
import ErrorBoundary from '../components/ErrorBoundary.js';
import Script from 'next/script';
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
