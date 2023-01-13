/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  data: any;
}
const ArtisItem = ({ data }: Props) => {
  const alias = data?.alias.split("-");
  return (
    <div className="p-2 rounded-xl hover-bg">
      <Link href="/" className="flex items-center gap-4">
        <div className="w-[40px h-[40px] overflow-hidden rounded-full">
          <img
            className="w-full h-full"
            src={`${data?.thumbnailM}`}
            alt="avatar"
          />
        </div>
        <span className="text-sm name">{alias.join(" ")}</span>
      </Link>
    </div>
  );
};

export default ArtisItem;
