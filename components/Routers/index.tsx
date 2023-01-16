import React from "react";
import { MusicContextProvider } from "../../context/MusicContext";
import Layout from "../Layout";

const Router = ({ children }: { children: React.ReactNode }) => {
  return (
    <MusicContextProvider>
      <Layout>{children}</Layout>
    </MusicContextProvider>
  );
};

export default Router;
