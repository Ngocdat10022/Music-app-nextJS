import React, { useContext, memo } from "react";
import { MusicContext } from "../../../../context/MusicContext";
import Loading from "../../../Loading";
import MusicItem from "../Poper/SongItem";

const SearchResult = ({ data }: { data: any }) => {
  const { loadingSearch } = useContext(MusicContext);
  return (
    <div className="flex flex-col gap-2">
      {loadingSearch ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : data.length > 0 && data ? (
        data.map((item: any, index: number) => {
          return <MusicItem key={item.encodeId} song={item} index={index} />;
        })
      ) : (
        <h1 className="flex items-center justify-center">
          Không tìm thấy kết quả
        </h1>
      )}
    </div>
  );
};

export default memo(SearchResult);
