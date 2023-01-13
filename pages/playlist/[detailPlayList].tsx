/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { lazy } from "react";
const Layout = lazy(() => import("../../components/Layout"));
import { MusicContextProvider } from "../../context/MusicContext";
import { getEncodeId, getPlayListDetailt } from "../../service/api";

const DetailPlayList = ({ data }: { data: any }) => {
  console.log("dataDetailtPlayList", data.data);
  const dataDetailtPlayList = data.data;
  return (
    <MusicContextProvider>
      <Layout>
        <img src={`${dataDetailtPlayList.thumbnailM}`} />
      </Layout>
    </MusicContextProvider>
  );
};
export const getStaticPaths = async () => {
  const paths = await getEncodeId();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (paths: any) => {
  const params = paths.params;
  const data = await getPlayListDetailt(params.detailPlayList);
  return {
    props: {
      data,
    },
  };
};
export default DetailPlayList;
