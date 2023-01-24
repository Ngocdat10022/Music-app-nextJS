/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { usePlaySong } from "../../../../hooks/usePlaySong";
interface PropsBannerItem {
  banner: any;
}
const BannerItem = ({ banner }: PropsBannerItem) => {
  const handlePlaySong = usePlaySong();
  return banner?.type === 4 ? (
    <div className="overflow-hidden rounded-2xl">
      <Link href={`/playlist/${banner?.encodeId}`}>
        <img
          width="100%"
          height="100%"
          src={`${banner?.banner}`}
          alt="avatar"
        />
      </Link>
    </div>
  ) : banner?.type === 1 ? (
    <div
      className="overflow-hidden cursor-pointer rounded-2xl"
      onClick={() => {
        alert("Bạn có muốn phát bài hát");
        handlePlaySong(banner.encodeId);
      }}
    >
      <img width="100%" height="100%" src={`${banner?.banner}`} alt="avatar" />
    </div>
  ) : (
    <div className="overflow-hidden cursor-pointer rounded-2xl">
      <img width="100%" height="100%" src={`${banner?.banner}`} alt="avatar" />
    </div>
  );
};

export default BannerItem;
