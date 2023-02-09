import React, { useEffect } from "react";
import ContainerChart from "../components/ContainerChart";
import Layout from "../components/Layout";
import { IMusicChartNewRealesa } from "../constant/interface";
import { MusicContextProvider } from "../context/MusicContext";
import { getMusicChart } from "../service/api";

const Chart = ({
  dataChartNewRealese,
}: {
  dataChartNewRealese: IMusicChartNewRealesa[];
}) => {
  return (
    <MusicContextProvider>
      <Layout>
        <ContainerChart dataChartNewRealese={dataChartNewRealese} />
      </Layout>
    </MusicContextProvider>
  );
};
export const getStaticProps = async () => {
  const data = await getMusicChart();
  const dataChartNewRealese = data?.data?.items;
  return {
    props: {
      dataChartNewRealese,
    },
  };
};

export default Chart;
