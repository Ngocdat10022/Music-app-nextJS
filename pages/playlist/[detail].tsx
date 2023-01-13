import React from "react";
import Layout from "../../components/Layout";
import { MusicContextProvider } from "../../context/MusicContext";

const DetailPlayList = () => {
  return (
    <MusicContextProvider>
      <Layout>
        <div>DetaiPlaylist</div>
      </Layout>
    </MusicContextProvider>
  );
};

export default DetailPlayList;
