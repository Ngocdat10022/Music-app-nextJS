import React, { useContext, useState } from "react";
import { HomeContext } from "../../context/HomeContext";
import List from "../ListMusic";
import Title from "../Title";
import Banner from "./Banner";
import SongNewRelesea from "./SongNewRelesea";
import CardItem from "../CardItem";

const ContainerHome = () => {
  const { musicSpring, newRelease, artistsTrending, newDayMusic, conner } =
    useContext(HomeContext);
  const dataNewRelease = newRelease[0];
  const dataNewReleaseAll = dataNewRelease.all;
  const dataNewReleaseOrthers = dataNewRelease.others;
  const dataNewReleaseVpop = dataNewRelease.vPop;
  // console.log("dataNewReleaseAll", dataNewReleaseAll);
  // console.log("dataNewReleaseOrthers", dataNewReleaseOrthers);
  // console.log("dataNewReleaseVpop", dataNewReleaseVpop);
  const dataNav = [
    {
      id: 1,
      title: "TẤT CẢ",
    },
    {
      id: 2,
      title: "VIỆT NAM",
    },
    {
      id: 3,
      title: "QUỐC TẾ",
    },
  ];
  const [tab, setTab] = useState(dataNav[0].title);
  const [allData, setAllData] = useState(dataNewReleaseAll);
  return (
    <div>
      <Banner />
      <Title>Tết Đến Rộn Ràng</Title>
      <List>
        {musicSpring.length &&
          musicSpring.map((item) => {
            return <CardItem key={item.uid} item={item} />;
          })}
      </List>
      <Title>Mới Phát Hành</Title>
      <div>
        <div className="flex items-center gap-5">
          {dataNav.map((item) => {
            return (
              <div
                onClick={() => {
                  setTab(item.title);
                  item.id === 1
                    ? setAllData(dataNewReleaseAll)
                    : item.id === 2
                    ? setAllData(dataNewReleaseVpop)
                    : setAllData(dataNewReleaseOrthers);
                }}
                className={`px-6 py-1 text-xs border text-center rounded-2xl cursor-pointer border-gray ${
                  tab === item.title ? "bg-primary" : ""
                }`}
                key={item.id}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {allData.length > 0 &&
            allData.map((songItem) => {
              return (
                <SongNewRelesea key={songItem.encodeId} songItem={songItem} />
              );
            })}
        </div>
      </div>
      <Title>Nghệ Sĩ Thịnh Hành 🔥</Title>
      <div className="mt-5">
        <List>
          {artistsTrending.length > 0 &&
            artistsTrending.map((artists) => {
              return <CardItem key={artists.encodeId} item={artists} />;
            })}
        </List>
      </div>
      <Title>Nhạc Mới Mỗi Ngày 🔥</Title>
      <div className="mt-5">
        <List>
          {newDayMusic.length > 0 &&
            newDayMusic.map((item) => {
              return <CardItem key={item.encodeId} item={item} />;
            })}
        </List>
      </div>
      <Title>XONE CORNER</Title>
      <div className="mt-5">
        <List>
          {conner.length > 0 &&
            conner.map((item) => {
              return <CardItem key={item.encodeId} item={item} />;
            })}
        </List>
      </div>
    </div>
  );
};

export default ContainerHome;
