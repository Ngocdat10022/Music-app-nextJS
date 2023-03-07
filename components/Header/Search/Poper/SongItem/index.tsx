/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";
import { MusicContext } from "../../../../../context/MusicContext";
import { usePlaySong } from "../../../../../hooks/usePlaySong";
import { getCookiesSongId } from "../../../../../utils/musicCookie";
import ButtonMusicFavorite from "../../../../ButtonMusicFavorite";
import LoadingSong from "../../../../LoadingSong";

const MusicItem = ({ song, index }: { song: any; index: number }) => {
  const { handlePlaySong } = usePlaySong();
  const nameSong = song?.alias.split("-");
  const { loadingSong, handleAddPlayList } = useContext(MusicContext);
  const songId = getCookiesSongId();
  return (
    <>
      <div className="flex items-center justify-between gap-2 p-2 rounded-xl hover-bg">
        <div className="flex items-center gap-2 p-2">
          <div
            onClick={() => {
              handlePlaySong(song.encodeId, song?.streamingStatus);
            }}
            className=" cursor-pointer w-[50px] h-[50px] relative overflow-hidden rounded-md"
          >
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
        <ButtonMusicFavorite
          functionBtn="add"
          onClick={() => {
            handleAddPlayList(song);
          }}
        />
      </div>
    </>
  );
};

export default memo(MusicItem);
