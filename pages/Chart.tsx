import React from "react";
import ContainerChart from "../components/ContainerChart";
import { IMusicChartNewRealesa } from "../interface/interface";
import { getMusicChart } from "../service/api";

const Chart = ({
  dataChartNewRealese,
}: {
  dataChartNewRealese: IMusicChartNewRealesa[];
}) => {
  return <ContainerChart dataChartNewRealese={dataChartNewRealese} />;
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
