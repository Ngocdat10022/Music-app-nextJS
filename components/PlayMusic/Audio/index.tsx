import React, { memo, useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { MusicContext } from "../../../context/MusicContext";
interface IPropsAudio {
  linkPlay: string;
  autoPlay: boolean;
}
const Audio = ({ linkPlay, autoPlay }: IPropsAudio) => {
  //   const { linkPlay, autoPlay } = useContext(MusicContext);
  return (
    <AudioPlayer
      style={{
        flex: 1,
        background: "rgb(23 15 35 / var(--tw-bg-opacity)",
        height: "100%",
        width: "100%",
      }}
      autoPlay={autoPlay}
      src={linkPlay}
      onPlay={() => console.log("autoPlay")}
      // other props here
    />
  );
};

export default memo(Audio);
