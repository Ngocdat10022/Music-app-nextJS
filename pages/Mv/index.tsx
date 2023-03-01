import React from "react";
import ContainerListVideo from "../../components/ContainerListVideo";
import { VideoContextProvider } from "../../context/VideoContext";

const index = () => {
  return (
    <>
      <VideoContextProvider>
        <ContainerListVideo></ContainerListVideo>
      </VideoContextProvider>
    </>
  );
};

export default index;
