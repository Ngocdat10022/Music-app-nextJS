/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { MusicContext } from "../../../../context/MusicContext";
import { setCookiesSongId } from "../../../../utils/musicCookie";

const MusicItem = ({ song }: { song: any }) => {
  const { setEncodeId, setAutoPlay, linkPlay, autoPlay } =
    useContext(MusicContext);
  const nameSong = song?.alias.split("-");
  const handlePlaySong = (id: string) => {
    setCookiesSongId(id);
    setEncodeId(id);
    setAutoPlay(true);
  };
  return (
    <>
      <div
        onClick={() => {
          handlePlaySong(song.encodeId);
        }}
        className="p-2 rounded-xl hover-bg"
      >
        <Link href="/" className="flex items-center gap-4">
          <div className="w-[50px h-[50px] overflow-hidden rounded-xl">
            <img
              className="w-[50px h-[50px] rounded-xl"
              src={`${song?.thumbnailM}`}
              alt="avatar"
            />
          </div>
          <div>
            <p className="text-sm title">{nameSong.join(" ")}</p>
            <p className="text-xs artist text-text1">{song?.artistsNames}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MusicItem;
