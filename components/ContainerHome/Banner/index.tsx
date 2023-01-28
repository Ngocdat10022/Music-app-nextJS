import React, { useContext, useEffect } from "react";
import { HomeContext } from "../../../context/HomeContext";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Banner = () => {
  const { dataBanner } = useContext(HomeContext);
  console.log("dataBanner", dataBanner);
  useEffect(() => {}, []);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2">
        {dataBanner.length > 0 &&
          dataBanner.map((banner) => {
            return (
              <SwiperSlide key={banner.encodeId}>
                <BannerItem banner={banner} />
              </SwiperSlide>
            );
          })}
      </div>
    </Swiper>
  );
};
export default Banner;
