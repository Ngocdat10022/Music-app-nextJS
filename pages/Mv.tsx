import React from "react";
import Layout from "../components/Layout";
import { MusicContextProvider } from "../context/MusicContext";

const Mv = () => {
  return (
    <MusicContextProvider>
      <Layout>
        <div>Mv</div>
      </Layout>
    </MusicContextProvider>
  );
};
export default Mv;
