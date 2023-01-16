/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { usePlaySong } from "../../../../../hooks/usePlaySong";

const MusicItem = ({ song }: { song: any }) => {
  const handlePlaySong = usePlaySong();
  const nameSong = song?.alias.split("-");
  return (
    <>
      <div
        onClick={() => {
          handlePlaySong(song.encodeId);
        }}
        className="flex items-center gap-2 p-2 cursor-pointer rounded-xl hover-bg"
      >
        <div className="w-[50px] h-[50px] overflow-hidden rounded-md">
          <img
            className="object-cover w-full h-full"
            src={`${song?.thumbnailM}`}
            alt="avatar"
          />
        </div>
        <div>
          <p className="text-sm title music-item-des">{nameSong.join(" ")}</p>
          <p className="text-xs artist text-text1">{song?.artistsNames}</p>
        </div>
      </div>
    </>
  );
};

export default MusicItem;
