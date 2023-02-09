import React, { useContext } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import PoperWrapper from "./Poper";
import SearchResult from "./SearchResult";
import ArtisItem from "./Poper/ArtistItem";
import useToggleValue from "../../../hooks/useToggleValue";
import { MusicContext } from "../../../context/MusicContext";
import Loading from "../../Loading";
const Search = () => {
  const dataPropose: {
    icon: React.ReactNode;
    title: string;
  }[] = [
    {
      icon: <IconChart />,
      title: "Quả phụ tướng",
    },
    {
      icon: <IconChart />,
      title: "con hứa",
    },
    {
      icon: <IconChart />,
      title: "Ngủ một mình",
    },
    {
      icon: <IconChart />,
      title: "Karaok",
    },
    {
      icon: <IconChart />,
      title: "Binz",
    },
  ];
  const { value: showTippy, handleToggleValue: handleSetShowTippy } =
    useToggleValue(false);
  const {
    searchValue,
    setSearchValue,
    debouncedValue,
    artists,
    songs,
    loadingSearch,
  } = useContext(MusicContext);
  return (
    <HeadlessTippy
      interactive
      visible={showTippy}
      onClickOutside={() => handleSetShowTippy()}
      render={(attrs) => (
        <div
          className=""
          aria-expanded="true"
          // tabIndex="-1"
          {...attrs}
        >
          {!debouncedValue ? (
            <PoperWrapper>
              <h4 className="mb-3 text-sm font-bold">Đề xuất cho bạn</h4>
              <div className="flex flex-col h-full">
                {dataPropose.map((item) => (
                  <li
                    onClick={() => setSearchValue(item.title)}
                    key={item.title}
                    className="flex items-center gap-4 px-2 py-2 text-sm rounded-lg cursor-pointer hover:opacity-60"
                  >
                    <span>{item.icon}</span>
                    <h3>{item.title}</h3>
                  </li>
                ))}
              </div>
              {/* <Searchresult /> */}
            </PoperWrapper>
          ) : (
            <PoperWrapper>
              <div className="pb-5">
                <h4 className="mb-3 text-sm font-bold">Nghệ sĩ</h4>
                <div className="flex flex-col h-full gap-2">
                  {loadingSearch ? (
                    <div className="flex items-center justify-center">
                      <Loading />
                    </div>
                  ) : artists.length > 0 && artists ? (
                    artists.map((item: any) => {
                      return <ArtisItem key={item.id} data={item} />;
                    })
                  ) : (
                    <div className="flex items-center justify-center">
                      <h1>Không tìm thấy kết quả</h1>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-bold">Gợi ý kết quả</h4>
                <SearchResult data={songs} />
              </div>
            </PoperWrapper>
          )}
        </div>
      )}
    >
      <div
        onClick={() => handleSetShowTippy(true)}
        className="relative z-30 flex items-center px-[6px] py-[10px] rounded-3xl max-w-[440px] w-[440px] bg-search"
      >
        <div className="relative">
          <span className="cursor-pointer">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="relative flex-1 w-full h-full pl-3 pr-6 text-sm bg-transparent border-none outline-none"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát"
        />
        {debouncedValue && (
          <span
            onClick={() => {
              setSearchValue("");
            }}
            className="mr-2 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}
      </div>
    </HeadlessTippy>
  );
};

const IconChart = () => {
  return (
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
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </svg>
  );
};
export default Search;
