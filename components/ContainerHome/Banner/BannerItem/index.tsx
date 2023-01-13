/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
interface PropsBannerItem {
  banner: any;
}
const BannerItem = ({ banner }: PropsBannerItem) => {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Link href="/playlist/123">
        <img
          width="100%"
          height="100%"
          src={`${banner?.banner}`}
          alt="avatar"
        />
      </Link>
    </div>
  );
};

export default BannerItem;
