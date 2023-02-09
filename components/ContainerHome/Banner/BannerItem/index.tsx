/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";
import "animate.css";
import { usePlaySong } from "../../../../hooks/usePlaySong";
interface PropsBannerItem {
  databanner: any;
  type: number;
}
const BannerItem = ({ databanner, type }: PropsBannerItem) => {
  const { handlePlaySong } = usePlaySong();
  return type === 4 ? (
    <div className="overflow-hidden rounded-2xl ">
      <Link href={`/playlist/${databanner.encodeId}`}>
        <img
          width={`100%`}
          height={`100%`}
          src={`${databanner.banner}`}
          alt="avatar"
        />
      </Link>
    </div>
  ) : type === 1 ? (
    <div
      className="overflow-hidden cursor-pointer rounded-2xl"
      onClick={() => {
        Swal.fire({
          title: "Bạn có muốn phát bài hát?",
          background: "#34224f",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#9b4de0",
          cancelButtonColor: "#9b4de0",
          cancelButtonText: "Bỏ Qua",
          confirmButtonText: "Phát",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Swal.fire("Deleted!", "Your file has been deleted.", "success");
            handlePlaySong(databanner.encodeId, databanner?.streamingStatus, 0);
          }
        });
      }}
    >
      <img
        width="100%"
        height="100%"
        src={`${databanner?.banner}`}
        alt="avatar"
      />
    </div>
  ) : (
    <div className="overflow-hidden cursor-pointer rounded-2xl">
      <img
        width="100%"
        height="100%"
        src={`${databanner?.banner}`}
        alt="avatar"
      />
    </div>
  );
};

export default BannerItem;
