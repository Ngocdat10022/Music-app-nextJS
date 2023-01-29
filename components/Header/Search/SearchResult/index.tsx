import React, { useContext } from "react";
import { MusicContext } from "../../../../context/MusicContext";
import Loading from "../../../Loading";
import MusicItem from "../Poper/SongItem";

const Searchresult = ({ data }: { data: any }) => {
  const { loading } = useContext(MusicContext);
  return (
    <div className="flex flex-col gap-2">
      {loading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : data.length > 0 && data ? (
        data.map((item: any) => {
          return <MusicItem key={item.encodeId} song={item} />;
        })
      ) : (
        <h1 className="flex items-center justify-center">
          Không tìm thấy kết quả
        </h1>
      )}
    </div>
  );
};

export default Searchresult;
