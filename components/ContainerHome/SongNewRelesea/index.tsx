/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";
import { ISongDetailPlayList } from "../../../constant/interface";
import { MusicContext } from "../../../context/MusicContext";
import { usePlaySong } from "../../../hooks/usePlaySong";
import { getCookiesSongId } from "../../../utils/musicCookie";
import LoadingSong from "../../LoadingSong";

const SongNewRelesea = ({
  songItem,
  index,
}: {
  songItem: ISongDetailPlayList;
  index: number;
}) => {
  const { handlePlaySong } = usePlaySong();
  const { loadingSong } = useContext(MusicContext);
  const songId = getCookiesSongId();
  return (
    <div
      onClick={() => {
        handlePlaySong(songItem?.encodeId, songItem?.streamingStatus, index);
      }}
      className={`${
        songId === songItem.encodeId ? "active-song" : ""
      } flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover-bg`}
    >
      <div className="w-[60px h-[60px] relative overflow-hidden rounded-md">
        <img
          className="w-[60px h-[60px] "
          src={`${songItem?.thumbnailM}`}
          alt="avatar"
        />
        {loadingSong && songId === songItem?.encodeId && <LoadingSong />}
      </div>
      <div>
        <p className="text-sm title">{songItem?.title}</p>
        <p className="text-xs artist text-text1">{songItem?.artistsNames}</p>
      </div>
    </div>
  );
};

export default memo(SongNewRelesea);
