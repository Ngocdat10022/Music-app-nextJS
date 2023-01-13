import React, { useContext } from "react";
import { HomeContext } from "../../../context/HomeContext";
import BannerItem from "./BannerItem";
const Banner = () => {
  const { dataBanner } = useContext(HomeContext);
  return (
    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2">
      {/* <Slider {...settings}> */}
      {dataBanner.length > 0 &&
        dataBanner.map((banner) => {
          return <BannerItem key={banner.encodeId} banner={banner} />;
        })}
      {/* </Slider> */}
    </div>
  );
};
export default Banner;
