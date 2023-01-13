import React, { useContext, useEffect, useState } from "react";
import Close from "../../../assets/Icons/Close";
import { MusicContext } from "../../../context/MusicContext";
import UseDebounce from "../../../hooks/useDebounce";
import { getSearch } from "../../../service/api";
import MusicItem from "../Search/Poper/SongItem";
interface Props {
  showSearchMobile: boolean;
}
const SearchMobile = ({ showSearchMobile = false }: Props) => {
  const { searchValue, setSearchValue, songs } = useContext(MusicContext);
  return (
    <div
      className={`sm:hidden overflow-y-scroll  fixed max-sm:z-10 z-10 ${
        showSearchMobile ? " translate-y-[0]" : "translate-y-[-200%]"
      } top-[70px] right-0 left-[70px] bottom-[89px] bg-bgPoper animation-search-mobile`}
    >
      <div className="flex items-center justify-center px-10 mt-5">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full py-4 border-none outline-none bg-bgPoper"
          placeholder="Tìm kiếm bài hát"
        />
        {searchValue && (
          <span onClick={() => setSearchValue("")}>
            <Close />
          </span>
        )}
      </div>
      <div className="flex flex-col p-5 mt-2">
        {songs.length > 0 ? (
          <h1 className="w-full">Nội dung tìm kiếm</h1>
        ) : (
          <h1 className="w-full">Không tìm thấy kết quả</h1>
        )}
        {songs.length > 0 &&
          songs.map((song: any) => {
            return <MusicItem key={song.alias} song={song} />;
          })}
      </div>
    </div>
  );
};

export default SearchMobile;
