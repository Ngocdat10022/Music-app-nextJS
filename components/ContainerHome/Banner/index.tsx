import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../../context/HomeContext";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Swiper as SwiperNew } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Banner = () => {
  const { dataBanner } = useContext(HomeContext);
  // console.log("dataBanner", dataBanner);
  return (
    <Swiper
      className=" swiper-container"
      slidesPerView={1}
      spaceBetween={10}
      slidesPerGroup={1}
      autoplay
      loop
      loopFillGroupWithBlank
      navigation
      modules={[Navigation]}
    >
      {/* <div className="grid grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1"> */}
      {dataBanner.length > 0 &&
        dataBanner.map((banner) => {
          return (
            <SwiperSlide className="swiper-wrapper" key={banner.encodeId}>
              <BannerItem databanner={banner} type={banner.type} />
            </SwiperSlide>
          );
        })}
      {/* </div> */}
    </Swiper>
  );
};
export default Banner;
