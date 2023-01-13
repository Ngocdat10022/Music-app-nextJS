/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicContext } from "../../context/MusicContext";
const PlayMusic = () => {
  const { linkPlay, autoPlay, infoSong } = useContext(MusicContext);
  const info = infoSong[0];
  return (
    <div className="fixed flex items-center justify-center gap-2 bottom-0 inset-x-0 bg-colorPlayMusic border-solid border-t-borderT border-t-[1px]  h-[89px]">
      <div className="flex items-center justify-center gap-4 w-[20%] ">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={`${info?.urlImage}`}
          alt="music"
        />
        <div className="flex flex-col">
          <h3>{info?.title} </h3>
          <span className="text-[12px] text-text1">{info?.nameArtists}</span>
        </div>
      </div>
      <AudioPlayer
        style={{
          flex: 1,
          background: "rgb(23 15 35 / var(--tw-bg-opacity)",
          height: "100%",
          // width: "500px",
        }}
        autoPlay={autoPlay}
        src={linkPlay}
        onPlay={() => console.log("autoPlay")}
        // other props here
      />

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

export default PlayMusic;
