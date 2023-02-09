/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { memo } from "react";
import { IMusicArtist } from "../../../constant/interface";

const Artists = ({ artist }: { artist: IMusicArtist }) => {
  return (
    <Link href={`/artistSong/${artist.id}`}>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full h-full overflow-hidden rounded-full cursor-pointer">
          <img className="w-full h-full" src={`${artist?.thumbnailM}`} alt="" />
        </div>
        <div className="text-sm text-text1">
          <span>{artist?.name}</span>
        </div>
        <div className="text-xs text-text2">
          <span>{`${artist?.totalFollow} Quan Tâm`}</span>
        </div>
      </div>
    </Link>
  );
};

export default memo(Artists);
