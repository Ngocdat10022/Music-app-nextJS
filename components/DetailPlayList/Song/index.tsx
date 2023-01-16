/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ISongDetailPlayList } from "../../../constant/interface";
import { usePlaySong } from "../../../hooks/usePlaySong";
import { formatTime } from "../../../utils/fomatTime";
const SongItem = ({ song }: { song: ISongDetailPlayList }) => {
  const handlePlaySong = usePlaySong();

  return (
    <div
      onClick={() => {
        handlePlaySong(song?.encodeId);
      }}
      key={song.encodeId}
      className="flex items-center justify-between px-2 transition-all rounded-lg cursor-pointer hover-bg"
    >
      <div className="media-left">
        <div className="flex items-center gap-2 p-2 rounded-xl ">
          <div className="w-[50px h-[50px] overflow-hidden rounded-lg">
            <img
              className="w-full h-full "
              src={`${song?.thumbnailM}`}
              alt="avatar"
            />
          </div>
          <div>
            <p className="text-sm title">{song?.title}</p>
            <p className="text-xs artist text-text1">{song?.artistsNames}</p>
          </div>
        </div>
      </div>
      <div className="text-xs media-content text-text2">{song?.title}</div>
      <div className="media-right text-text2">{formatTime(song?.duration)}</div>
    </div>
  );
};

export default SongItem;
