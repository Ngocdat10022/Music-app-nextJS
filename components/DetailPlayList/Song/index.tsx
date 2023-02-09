/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";
import { ISongDetailPlayList } from "../../../constant/interface";
import { MusicContext } from "../../../context/MusicContext";
import { usePlaySong } from "../../../hooks/usePlaySong";
import { formatTime } from "../../../utils/fomatTime";
import { getCookiesSongId } from "../../../utils/musicCookie";
import LoadingSong from "../../LoadingSong";
const SongItem = ({
  song,
  index,
}: {
  song: ISongDetailPlayList;
  index: number;
}) => {
  const { handlePlaySong } = usePlaySong();
  const songId = getCookiesSongId();
  const { loadingSong } = useContext(MusicContext);
  return (
    <div
      onClick={() => {
        handlePlaySong(song?.encodeId, song?.streamingStatus, index);
      }}
      key={song.encodeId}
      className={`${
        songId === song?.encodeId ? "active-song" : ""
      } flex items-center justify-between px-2 transition-all rounded-lg cursor-pointer hover-bg`}
    >
      <div className="relative z-10 media-left max-sm:w-full">
        <div className="relative flex items-center gap-2 p-2 rounded-xl ">
          <div className="max-sm:hidden relative z-10 w-[50px h-[50px] overflow-hidden rounded-lg">
            <img
              className="z-10 w-[50px h-[50px] "
              src={`${song?.thumbnailM}`}
              alt="avatar"
            />
            {loadingSong && songId === song?.encodeId && <LoadingSong />}
          </div>
          <div className="sm:hidden">
            <div>
              {index + 1}
              {loadingSong && songId === song?.encodeId && <LoadingSong />}
            </div>
          </div>
          <div className="flex-1 max-sm:w-full">
            <p className="text-sm title music-item-des">{song?.title}</p>
            <p className="text-xs artist music-item-des text-text2">
              {song?.artistsNames}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs media-content music-item-des text-text2 max-sm:hidden">
        {song?.title}
      </div>
      <div className="media-right text-text2 max-sm:hidden">
        {formatTime(song?.duration)}
      </div>
    </div>
  );
};

export default memo(SongItem);
