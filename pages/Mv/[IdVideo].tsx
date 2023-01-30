/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { MusicContextProvider } from "../../context/MusicContext";
import { getCategoryVideo, getDetailVideo } from "../../service/api";
import Title from "../../components/Title";
import ListVideo from "../../components/ContainerListVideo/ListVideo";
import { IVideoItem } from "../../constant/interface";
import VideoItem from "../../components/ContainerListVideo/VideoItem";
const qualityList: {
  id: number;
  title: string;
}[] = [
  {
    id: 0,
    title: "360p",
  },
  {
    id: 1,
    title: "480p",
  },
  {
    id: 2,
    title: "720p",
  },
];
interface IInfo {
  artistsNames: string;
  title: string;
  thumbnailM: string;
}
const IdVideo = () => {
  const [linkVideo, setLinkVideo] = useState<string>();
  const [quality, setQuality] = useState<string>("360p");
  const [active, setActive] = useState<number>(0);
  const [recommends, setRecommends] = useState<IVideoItem[]>([]);
  const [info, setInfo] = useState<IInfo>();
  const router = useRouter();
  let id = router.query.IdVideo;
  useEffect(() => {
    (async () => {
      try {
        const dataDetailVideo = await getDetailVideo(`${id}`);
        console.log("dataDetailVideo", dataDetailVideo);
        setLinkVideo(dataDetailVideo.data.streaming.mp4[quality]);
        setRecommends(dataDetailVideo.data.recommends);
        setInfo({
          artistsNames: dataDetailVideo?.data?.artistsNames,
          title: dataDetailVideo?.data?.title,
          thumbnailM: dataDetailVideo?.data?.thumbnailM,
        });
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [id, quality]);
  return (
    <MusicContextProvider>
      <Layout>
        <div className="relative w-full">
          <div className="flex items-center gap-4 mt-2 mb-2">
            <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
              <img
                className="object-cover w-full h-full"
                src={`${info?.thumbnailM}`}
                alt={`${info?.thumbnailM}`}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-md">
                {info?.title}
              </span>
              <span className="text-sm text-text2">{info?.artistsNames}</span>
            </div>
          </div>
          <Player playsInline poster={`${info?.thumbnailM}`} src={linkVideo} />
          <div className="flex items-center gap-3">
            {qualityList.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setActive(item.id);
                    setQuality(`${item.title}`);
                  }}
                  key={item.id}
                  className={`${
                    item.id === active ? "text-primary" : ""
                  } cursor-pointer`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div>
            <Title>Video Liên Quan</Title>
            <ListVideo>
              {recommends.length > 0 &&
                recommends.map((item) => {
                  return <VideoItem key={item.encodeId} data={item} />;
                })}
            </ListVideo>
          </div>
        </div>
      </Layout>
      ;
    </MusicContextProvider>
  );
};

export default IdVideo;
