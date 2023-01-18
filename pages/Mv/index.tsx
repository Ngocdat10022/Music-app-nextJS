import React from "react";
import ContainerListVideo from "../../components/ContainerListVideo";
import Layout from "../../components/Layout";
import { MusicContextProvider } from "../../context/MusicContext";
import { VideoContextProvider } from "../../context/VideoContext";

const index = () => {
  return (
    <MusicContextProvider>
      <Layout>
        <VideoContextProvider>
          <ContainerListVideo></ContainerListVideo>
        </VideoContextProvider>
      </Layout>
    </MusicContextProvider>
  );
};

export default index;
