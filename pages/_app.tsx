import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CenteredLayout } from "../src/components/CenteredLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Daniel Gih</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <CenteredLayout>
        <Component {...pageProps} />
      </CenteredLayout>
    </>
  );
}

export default MyApp;
