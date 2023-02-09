/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { memo } from "react";
import HeartIcon from "../../assets/Icons/HeartIcon";
import List from "../../assets/Icons/List";
import PlayIcon from "../../assets/Icons/PlayIcon";
const CardItem = ({ item }: { item: any }) => {
  return (
    <div
      key={item.uid}
      className="flex flex-col items-start justify-between gap-3"
    >
      <Link href={`/playlist/${item.encodeId}`}>
        <div className="relative w-full h-[214px] lg:[h-150px] max-xl:[h-150px] max-maxsm:h-[120px]  max-sm:h-[150px] overflow-hidden rounded-md wrapper-img-music-item">
          <img
            className="w-full h-full "
            src={`${item?.thumbnailM}`}
            alt="img"
          />
          <div className="hidden items-center justify-center gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <span className="">
              <HeartIcon />
            </span>
            <span>
              <PlayIcon width="w-12" />
            </span>
            <span className="">
              <List />
            </span>
          </div>
        </div>
        <h3 className="text-sm font-bold text-white text-start hover:text-primary hover:cursor-pointer">
          {item?.title}
        </h3>
      </Link>
      <p className="text-sm pointer-events-none music-item-des text-start text-text1 max-sm:hidden">
        {item?.sortDescription}
      </p>
    </div>
  );
};

export default memo(CardItem);
