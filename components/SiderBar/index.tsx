/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Personal from "../../assets/Icons/Personal";
import Chart from "../../assets/Icons/Chart";
import Discover from "../../assets/Icons/Discover";
import Radio from "../../assets/Icons/Radio";
import Follow from "../../assets/Icons/Follow";
import MusicNew from "../../assets/Icons/MusicNew";
import Star from "../../assets/Icons/Star";
import Mv from "../../assets/Icons/Mv";
import Category from "../../assets/Icons/Category";
import { Nav } from "../../interface/interface";
import CardSiderBar from "./CardSiderbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
const NAV_ONE: Nav[] = [
  {
    id: 0,
    title: "Khám Phá",
    icon: <Discover />,
    to: "/",
  },
  {
    id: 1,
    title: "Thể Loại",
    icon: <Category />,
    to: "/",
  },
  {
    id: 2,
    title: "Radio",
    icon: <Radio />,
    to: "/",
  },
  {
    id: 3,
    title: "Theo Dõi",
    icon: <Follow />,
    to: "/",
  },
];
const NAV_TWO: Nav[] = [
  {
    id: 4,
    title: "Trang Chủ",
    icon: <Personal />,
    to: "/",
  },
  {
    id: 5,
    title: "#Zingchart",
    icon: <Chart />,
    to: "/Chart",
  },
  {
    id: 6,
    title: "Top100",
    icon: <Star />,
    to: "/Top100",
  },
  {
    id: 7,
    title: "Mv",
    icon: <Mv />,
    to: "/Mv",
  },
  {
    id: 8,
    title: "Nhạc Mới",
    icon: <MusicNew />,
    to: "/",
  },
];
const SiderBar = () => {
  const [isWidth, setIsWidth] = useState<boolean>(true);
  const handleWidthSiderBar = () => {
    setIsWidth(!isWidth);
  };
  return (
    <div
      className={`siderbar-container py-2 ${
        isWidth ? "max-lg:w-[70px]" : "max-lg:w-[240px]"
      }  w-[240px] fixed max-sm:z-50 z-50 inset-y-0 transition-all left-0 pb-[54px] bg-colorSiderbar `}
    >
      <div
        className={`logo ml-6 w-[120px] h-[40px] mb-6 ${
          isWidth
            ? "max-lg:w-[70px] max-lg:ml-0"
            : "max-lg:w-[120px] max-lg:ml-6"
        }   lg:w-[120px] lg:ml-6`}
      >
        <img
          className={`w-full h-full ${
            isWidth ? "max-lg:hidden" : "max-lg:block"
          }  lg:block`}
          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          alt="logo"
        />
        <img
          className={`w-full h-full ${
            isWidth ? "max-lg:block" : "max-lg:hidden"
          } lg:hidden`}
          src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.8.22/static/media/icon_zing_mp3_60.f6b51045.svg"
          alt="logo2"
        />
      </div>
      <div className="flex flex-col items-center overflow-y-scroll nav-container poper-scroll">
        <nav className="relative w-full">
          <ul>
            {NAV_TWO.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    href={`${item.to}`}
                    className="flex items-center gap-3 px-6 py-2 text-[12px] font-bold text-text1 hover:text-white"
                  >
                    <span>{item.icon}</span>
                    <span
                      className={`${
                        isWidth ? "opacity-0" : "opacity-100"
                      } lg:opacity-100`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="sidebar-divide relative z-30  after:content-[``] after:absolute after:right-6 after:left-6 after:top-0 after:h-[1px]  after:bg-borderT after:mt-4 "></div>
        <PerfectScrollbar
          style={{
            width: "100%",
          }}
          options={{
            suppressScrollX: true,
          }}
          className="scrollbar"
        >
          <div className="relative flex items-center flex-col pb-[54px] mt-4 poper-scroll ">
            <nav className="relative w-full ">
              <ul>
                {NAV_ONE.map((item) => {
                  return (
                    <li key={item.title}>
                      <Link
                        href={`${item.to}`}
                        className="flex items-center gap-3 px-6 py-2 text-[12px] font-bold text-text1 hover:text-white"
                      >
                        <span>{item.icon}</span>
                        <span
                          className={`${
                            isWidth ? "opacity-0" : "opacity-100"
                          } lg:opacity-100`}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex flex-col items-center mt-2 mb-2">
              <CardSiderBar
                border="border"
                bgBtn="bg-transparent"
                bg="bg-primary"
                childrenCard="ĐĂNG NHẬP"
              >
                Đăng nhập để khám phá PlayList dành riêng cho bạn
              </CardSiderBar>
              <CardSiderBar
                border="border-none"
                bgBtn="bg-yellow"
                bg="bg-gradient"
                childrenCard="NÂNG CẤP VIP"
              >
                Nghe nhạc không quản cáo cùng kho nhạc VIP
              </CardSiderBar>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <button className="max-lg:hidden ld:block z-20 font-bold fixed bottom-[89px] text-center text-sm w-[240px]  bg-colorSiderbar  border-solid border-t-borderT border-t-[1px] h-[54px] flex items-center justify-center">
        + Tạo PlayList Mới
      </button>
      <button
        onClick={handleWidthSiderBar}
        className="max-lg:flex lg:hidden z-20 font-bold absolute bottom-[10px] right-4 text-center text-sm w-[40px]  rounded-full bg-activeLi h-[40px]  items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SiderBar;
