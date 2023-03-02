/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";
import { MusicContext } from "../../../../../context/MusicContext";
import { usePlaySong } from "../../../../../hooks/usePlaySong";
import { getCookiesSongId } from "../../../../../utils/musicCookie";
import LoadingSong from "../../../../LoadingSong";

const MusicItem = ({ song, index }: { song: any; index: number }) => {
  const { handlePlaySong } = usePlaySong();
  const nameSong = song?.alias.split("-");
  const { loadingSong } = useContext(MusicContext);
  const songId = getCookiesSongId();
  return (
    <>
      <div
        onClick={() => {
          handlePlaySong(song.encodeId, song?.streamingStatus);
        }}
        className="flex items-center gap-2 p-2 cursor-pointer rounded-xl hover-bg"
      >
        <div className="w-[50px] h-[50px] relative overflow-hidden rounded-md">
          <img
            className="object-cover w-[50px] h-[50px]"
            src={`${song?.thumbnailM}`}
            alt="avatar"
          />
          {loadingSong && songId === song.encodeId && <LoadingSong />}
        </div>
        <div>
          <p className="text-sm title music-item-des">{nameSong.join(" ")}</p>
          <p className="text-xs artist text-text1">{song?.artistsNames}</p>
        </div>
      </div>
    </>
  );
};

export default memo(MusicItem);
