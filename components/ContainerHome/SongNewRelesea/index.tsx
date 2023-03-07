/* eslint-disable @next/next/no-img-element */
import React, { useContext, memo } from "react";
import { ISongDetailPlayList } from "../../../interface/interface";
import { MusicContext } from "../../../context/MusicContext";
import { usePlaySong } from "../../../hooks/usePlaySong";
import { getCookiesSongId } from "../../../utils/musicCookie";
import LoadingSong from "../../LoadingSong";
import ButtonMusicFavorite from "../../ButtonMusicFavorite";

const SongNewRelesea = ({
  songItem,
  index,
}: {
  songItem: ISongDetailPlayList;
  index: number;
}) => {
  const { handlePlaySong } = usePlaySong();
  const { loadingSong, handleAddPlayList } = useContext(MusicContext);
  const songId = getCookiesSongId();
  return (
    <div
      className={`${
        songId === songItem.encodeId ? "active-song" : ""
      } relative flex items-center justify-between transition-all rounded-md cursor-pointer hover-bg`}
    >
      <div
        onClick={() => {
          handlePlaySong(songItem?.encodeId, songItem?.streamingStatus, index);
        }}
        className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover-bg"
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
      <ButtonMusicFavorite
        functionBtn="add"
        onClick={() => {
          handleAddPlayList(songItem);
        }}
      />
    </div>
  );
};

export default memo(SongNewRelesea);
