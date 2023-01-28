/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";
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
        Swal.fire({
          title: "Bạn có muốn phát bài hát?",
          background: "#170f23",
          // text: "You won't be able to revert this!",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "Bỏ Qua",
          confirmButtonText: "Phát",
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
            handlePlaySong(banner.encodeId, banner?.streamingStatus);
          }
        });
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
