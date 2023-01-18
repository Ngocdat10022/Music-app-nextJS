/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { IVideoItem } from "../../../constant/interface";

const VideoItem = ({ data }: { data: IVideoItem }) => {
  return (
    <div className="w-full ">
      <Link href={`/Mv/${data.encodeId}`}>
        <div className="w-full h-[211px] overflow-hidden rounded-md cursor-pointer">
          <img
            className="object-cover w-full h-full"
            src={`${data?.thumbnailM}`}
            alt={`${data?.thumbnailM}`}
          />
        </div>
      </Link>
      <div className="flex items-center gap-4 mt-2">
        <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
          <img
            className="object-cover w-full h-full"
            src={`${data?.thumbnailM}`}
            alt={`${data?.thumbnailM}`}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-md">{data?.title}</span>
          <span className="text-sm text-text2">{data?.artistsNames}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
