import React, { useEffect } from "react";
import SongItem from "../components/DetailPlayList/Song";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { IMusicChartNewRealesa } from "../constant/interface";
import { MusicContextProvider } from "../context/MusicContext";
import { getMusicChart } from "../service/api";

const Chart = ({
  dataChartNewRealese,
}: {
  dataChartNewRealese: IMusicChartNewRealesa[];
}) => {
  console.log("dataChartNewRealese", dataChartNewRealese);

  return (
    <MusicContextProvider>
      <Layout>
        <Title>#zingchart</Title>
        <div className="mt-4">
          {dataChartNewRealese.length > 0 &&
            dataChartNewRealese.map((song, index) => {
              return (
                <SongItem key={song.encodeId} song={song} index={index + 1} />
              );
            })}
        </div>
      </Layout>
    </MusicContextProvider>
  );
};
export const getStaticProps = async () => {
  const data = await getMusicChart();
  const dataChartNewRealese = data.data.items;
  return {
    props: {
      dataChartNewRealese,
    },
  };
};

export default Chart;
