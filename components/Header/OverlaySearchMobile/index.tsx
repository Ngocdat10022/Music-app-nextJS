import React, { useContext, useEffect, useState } from "react";
import Close from "../../../assets/Icons/Close";
import { MusicContext } from "../../../context/MusicContext";
import UseDebounce from "../../../hooks/useDebounce";
import { getSearch } from "../../../service/api";
import Loading from "../../Loading";
import ArtisItem from "../Search/Poper/ArtistItem";
import MusicItem from "../Search/Poper/SongItem";
interface Props {
  showSearchMobile: boolean;
}
const SearchMobile = ({ showSearchMobile = false }: Props) => {
  const { searchValue, setSearchValue, songs, artists, loading } =
    useContext(MusicContext);
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
        {/* {songs.length > 0 && artists.length > 0 ? (
          <h1 className="w-full">Nội dung tìm kiếm</h1>
        ) : (
          searchValue && <h1 className="w-full">Không tìm thấy kết quả</h1>
        )} */}
        {!loading &&
          songs.length <= 0 &&
          artists.length <= 0 &&
          searchValue && <h1 className="w-full">Không tìm thấy kết quả</h1>}
        {loading && searchValue ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {artists.length > 0 && artists && (
              <div className="flex flex-col ">
                <h1 className="my-2">nghệ sĩ</h1>
                {artists.length > 0 &&
                  artists.map((artist: any) => {
                    return <ArtisItem key={artist?.encodeId} data={artist} />;
                  })}
              </div>
            )}
            {songs.length > 0 && songs && (
              <div className="flex flex-col ">
                <h1 className="my-2">Bài hát</h1>
                {songs.length > 0 &&
                  songs.map((song: any) => {
                    return <MusicItem key={song?.encodeId} song={song} />;
                  })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMobile;
