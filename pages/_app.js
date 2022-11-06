import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>N E X T F L I X</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
