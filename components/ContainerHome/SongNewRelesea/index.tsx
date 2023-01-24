/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { ISongDetailPlayList } from "../../../constant/interface";
import { usePlaySong } from "../../../hooks/usePlaySong";

const SongNewRelesea = ({ songItem }: { songItem: ISongDetailPlayList }) => {
  const handlePlaySong = usePlaySong();
  return (
    <div
      onClick={() => {
        handlePlaySong(songItem?.encodeId, songItem?.streamingStatus);
      }}
      className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover-bg"
    >
      <div className="w-[60px h-[60px] overflow-hidden rounded-md">
        <img
          className="w-full h-full "
          src={`${songItem?.thumbnailM}`}
          alt="avatar"
        />
      </div>
      <div>
        <p className="text-sm title">{songItem?.title}</p>
        <p className="text-xs artist text-text1">{songItem?.artistsNames}</p>
      </div>
    </div>
  );
};

export default SongNewRelesea;
