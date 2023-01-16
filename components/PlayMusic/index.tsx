/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";

import { MusicContext } from "../../context/MusicContext";
import Audio from "./Audio";
const PlayMusic = () => {
  const { linkPlay, autoPlay, infoSong } = useContext(MusicContext);
  const info = infoSong[0];
  return (
    <div className="fixed flex items-center justify-center gap-2 bottom-0 inset-x-0 bg-colorPlayMusic border-solid border-t-borderT border-t-[1px]  h-[89px]">
      <div className="max-lg:fixed  max-lg:bg-colorPlayMusic max-lg:right-0 max-lg:bottom-[89px] max-lg:left-[70px]  max-lg:justify-start max-lg:border-t-borderT max-lg:py-2  max-lg:width-container-music-mobile flex items-center  justify-center gap-4 w-[20%] ">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={`${info?.urlImage}`}
          alt="music"
        />
        <div className="flex flex-col">
          <h3 className=" max-lg:text-xs music-item-des">{info?.title} </h3>
          <span className="text-[12px] text-text2">{info?.nameArtists}</span>
        </div>
      </div>
      <Audio linkPlay={linkPlay} autoPlay={autoPlay} />
      {/* <AudioPlayer
        style={{
          height: "100%",
          background: "rgb(23 15 35 / var(--tw-bg-opacity)",
        }}
        autoPlay={true}
        src={linkPlay}
        layout="horizontal"
      /> */}
    </div>
  );
};

export default memo(PlayMusic);
