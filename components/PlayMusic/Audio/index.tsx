import React, { memo, useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { usePlaySong } from "../../../hooks/usePlaySong";
interface IPropsAudio {
  linkPlay: string;
  autoPlay: boolean;
}
const Audio = ({ linkPlay, autoPlay }: IPropsAudio) => {
  const { handleNextSong, handlePrevSong } = usePlaySong();

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
      onClickNext={handleNextSong}
      showSkipControls
      onClickPrevious={handlePrevSong}
      onEnded={handleNextSong}
    />
  );
};

export default memo(Audio);
