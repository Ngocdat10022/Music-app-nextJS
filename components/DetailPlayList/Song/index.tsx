/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ISongDetailPlayList } from "../../../constant/interface";
import { usePlaySong } from "../../../hooks/usePlaySong";
import { formatTime } from "../../../utils/fomatTime";
const SongItem = ({
  song,
  index,
}: {
  song: ISongDetailPlayList;
  index: number;
}) => {
  const handlePlaySong = usePlaySong();

  return (
    <div
      onClick={() => {
        handlePlaySong(song?.encodeId);
      }}
      key={song.encodeId}
      className="flex items-center justify-between px-2 transition-all rounded-lg cursor-pointer hover-bg"
    >
      <div className="media-left max-sm:w-full">
        <div className="flex items-center gap-2 p-2 rounded-xl ">
          <div className="max-sm:hidden w-[50px h-[50px] overflow-hidden rounded-lg">
            <img
              className="w-full h-full "
              src={`${song?.thumbnailM}`}
              alt="avatar"
            />
          </div>
          <div className="sm:hidden">{index}</div>
          <div className="flex-1 max-sm:w-full">
            <p className="text-sm title music-item-des">{song?.title}</p>
            <p className="text-xs artist text-text2">{song?.artistsNames}</p>
          </div>
        </div>
      </div>
      <div className="text-xs media-content text-text2 max-sm:hidden">
        {song?.title}
      </div>
      <div className="media-right text-text2 max-sm:hidden">
        {formatTime(song?.duration)}
      </div>
    </div>
  );
};

export default SongItem;
