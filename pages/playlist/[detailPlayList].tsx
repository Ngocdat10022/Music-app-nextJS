/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { lazy } from "react";
import DetaiPlayList from "../../components/ContainerDetailPlayList";
import { getEncodeId, getPlayListDetailt } from "../../service/api";

const DetailPlayList = ({ data }: { data: any }) => {
  return (
    <>
      <DetaiPlayList data={data} />
    </>
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
