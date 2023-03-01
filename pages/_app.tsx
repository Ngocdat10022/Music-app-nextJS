import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MusicContextProvider } from "../context/MusicContext";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MusicContextProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </MusicContextProvider>
    </>
  );
}
