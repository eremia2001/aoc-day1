import { Head } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Importieren der JetBrains Mono Schriftart */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
