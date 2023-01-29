import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../../context/HomeContext";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Banner = () => {
  const { dataBanner } = useContext(HomeContext);
  console.log("dataBanner", dataBanner);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesPerGroup={1}
      autoplay
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
      }}
      className="relative z-5"
    >
      {dataBanner.length > 0 &&
        dataBanner.map((banner) => {
          return (
            <SwiperSlide key={banner.encodeId}>
              <BannerItem banner={banner} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
export default Banner;
