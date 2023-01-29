/* eslint-disable @next/next/no-img-element */
import React from "react";
import Search from "./Search";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/perspective.css";
import Setting from "../../assets/Icons/Setting";
import Upload from "../../assets/Icons/Upload";
import Shirt from "../../assets/Icons/Shirt";
import SearchMobile from "./OverlaySearchMobile";
import useToggleValue from "../../hooks/useToggleValue";
import Close from "../../assets/Icons/Close";
import SearchIcon from "../../assets/Icons/SearchIcon";
import { MusicContextProvider } from "../../context/MusicContext";
const Header = () => {
  const navigateUser: {
    titleTooltip: string;
    icon: React.ReactNode;
    isHide: boolean;
  }[] = [
    {
      titleTooltip: "Chủ để",
      icon: <Shirt />,
      isHide: false,
    },
    {
      titleTooltip: "Tải lên",
      icon: <Upload />,
      isHide: true,
    },
    {
      titleTooltip: "Cài đặt",
      icon: <Setting />,
      isHide: false,
    },
  ];
  const { value: showSearchMobile, handleToggleValue: handleShowSearchMobile } =
    useToggleValue();
  return (
    <>
      <div className="bg-header ml-[240px] max-lg:ml-[70px] fixed z-30 top-0 right-0 left-0 h-[70px] bg-slate-600 py-0 px-[60px] max-lg:px-[20px] max-sm:hidden">
        <div className="flex items-center justify-between h-full gap-4 max-md:gap-4 wrapper-header">
          <div className="flex items-center max-md:justify-center gap-[20px] w-[70%]">
            <div className="flex items-center h-full gap-4 navigation ">
              <span className="cursor-pointer text-iconHeader">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
              <span className="cursor-pointer text-iconHeader">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </div>
            <Search />
          </div>
          <div className="flex items-center h-full gap-2 max-md:fixed max-md:top-5 max-md:ml-2 max-md:right-2 max-md:flex-col ">
            {navigateUser.map((item) => {
              return (
                <Tippy
                  key={item.titleTooltip}
                  content={
                    <div className="relative after-up text-[12px] bg-bgTooltip px-2 rounded-md py-[8px] ">
                      {item.titleTooltip}
                    </div>
                  }
                  animation="perspective"
                  placement="bottom"
                  interactive={false}
                  delay={100}
                >
                  <span
                    className={`w-[40px] cursor-pointer h-[40px] rounded-full ${
                      item.isHide ? "max-lg:hidden" : ""
                    } flex items-center justify-center  bg-gray`}
                  >
                    {item.icon}
                  </span>
                </Tippy>
              );
            })}
            <div className="avatar w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/316292360_1327241011447456_8130773921582924338_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XIbi0uhniacAX86aCRV&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDMPle3VqBZgkwbMBxNgh1JhTAtUGSd4whPN0bFcQjiAg&oe=63BFB4FB"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:hidden flex items-center justify-between header-mobile bg-header px-5 header-mobile ml-[70px]   h-[70px] fixed max-sm:z-20 z-20 top-0 right-0">
        <div className="logo w-[120px] h-full text-borderL">
          <img
            className={`w-full h-full `}
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            alt="logo"
          />
        </div>
        <div className="flex items-center gap-4">
          {showSearchMobile ? (
            <span
              className="text-white cursor-pointer"
              onClick={() => handleShowSearchMobile()}
            >
              <Close />
            </span>
          ) : (
            <span
              className="cursor-pointer"
              onClick={() => handleShowSearchMobile()}
            >
              <SearchIcon />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg> */}
            </span>
          )}
          <div className="avatar w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/307444527_1274631903375034_543478671407240575_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DFvYk2Pqel0AX8FW-g2&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfBi32nYVq3lXwmuO19g9NSKTEFhAXmeTvLOzXJKpkuzjA&oe=63D45C9F"
              alt="avatar"
            />
          </div>
        </div>
        <SearchMobile showSearchMobile={showSearchMobile} />
      </div>
    </>
  );
};

export default Header;
