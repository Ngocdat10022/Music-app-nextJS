import React from "react";
import MusicItem from "../MusicItem";

const Searchresult = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col gap-2">
      {data.length > 0 ? (
        data.map((item: any) => {
          return <MusicItem key={item.encodeId} song={item} />;
        })
      ) : (
        <h1>Không tìm thấy bài hát</h1>
      )}
    </div>
  );
};

export default Searchresult;
