import React, { memo } from "react";
import { IMusicChartNewRealesa } from "../../interface/interface";

import { NextMusixEffect } from "../../constant/globalFunc";
import SongItem from "../DetailPlayList/Song";
import Title from "../Title";

const ContainerChart = ({
  dataChartNewRealese,
}: {
  dataChartNewRealese: IMusicChartNewRealesa[];
}) => {
  NextMusixEffect(dataChartNewRealese);
  return (
    <>
      <Title>#zingchart</Title>
      <div className="mt-4">
        {dataChartNewRealese.length > 0 &&
          dataChartNewRealese.map((song, index) => {
            return <SongItem key={song.encodeId} song={song} index={index} />;
          })}
      </div>
    </>
  );
};

export default memo(ContainerChart);
