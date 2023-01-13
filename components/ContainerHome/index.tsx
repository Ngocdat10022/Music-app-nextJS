import React, { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import ListMusic from "../ListMusic";
import MusicItem from "../ListMusic/MusicItem";
import Title from "../Title";
import Banner from "./Banner";

const ContainerHome = () => {
  const { musicSpring } = useContext(HomeContext);

  return (
    <div>
      <Banner />
      <Title>Tết Đến Rộn Ràng</Title>
      <ListMusic>
        {musicSpring.length &&
          musicSpring.map((item) => {
            return <MusicItem key={item.uid} item={item} />;
          })}
      </ListMusic>
    </div>
  );
};

export default ContainerHome;
