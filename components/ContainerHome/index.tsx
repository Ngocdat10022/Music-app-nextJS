import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";
import List from "../ListMusic";
import Title from "../Title";
import SongNewRelesea from "./SongNewRelesea";
import CardItem from "../CardItem";
import dynamic from "next/dynamic";
import { NextMusixEffect } from "../../constant/globalFunc";
const Banner = dynamic(() => import("./Banner"));
const ContainerHome = () => {
  const {
    musicSpring,
    newRelease,
    artistsTrending,
    newDayMusic,
    conner,
    dataTitles,
  } = useContext(HomeContext);
  const dataNewRelease = newRelease[0];
  const dataNewReleaseAll = dataNewRelease?.all;
  const dataNewReleaseOrthers = dataNewRelease?.others;
  const dataNewReleaseVpop = dataNewRelease?.vPop;
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
  const listTitle = dataTitles.map((item: any) => {
    return item.title;
  });
  const [tab, setTab] = useState(dataNav[0].title);
  const [allData, setAllData] = useState(dataNewReleaseAll);
  NextMusixEffect(allData);
  return (
    <div>
      <Banner />
      <Title>{listTitle[0]}</Title>
      <List>
        {musicSpring.length &&
          musicSpring.map((item) => {
            return <CardItem key={item.encodeId} item={item} />;
          })}
      </List>
      <Title>{listTitle[1]}</Title>
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
          {allData?.length > 0 &&
            allData?.map((songItem, index) => {
              return (
                <SongNewRelesea
                  key={songItem.encodeId}
                  songItem={songItem}
                  index={index}
                />
              );
            })}
        </div>
      </div>
      <Title>{listTitle[3]}</Title>
      <div className="mt-5">
        <List>
          {artistsTrending.length > 0 &&
            artistsTrending.map((artists) => {
              return <CardItem key={artists.encodeId} item={artists} />;
            })}
        </List>
      </div>
      <Title>{listTitle[2]}</Title>
      <div className="mt-5">
        <List>
          {newDayMusic.length > 0 &&
            newDayMusic.map((item) => {
              return <CardItem key={item.encodeId} item={item} />;
            })}
        </List>
      </div>
      <Title>{listTitle[4]}</Title>
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
