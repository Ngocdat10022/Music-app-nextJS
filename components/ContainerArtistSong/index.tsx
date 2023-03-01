import React, { memo, useEffect } from "react";
import { NextMusixEffect } from "../../constant/globalFunc";
import { IMusicChartNewRealesa } from "../../interface/interface";
import SongItem from "../DetailPlayList/Song";
import Loading from "../Loading";
import Title from "../Title";
interface IProp {
  artistSong: IMusicChartNewRealesa[];
  loadingSong: boolean;
  onClick: () => void;
}
const ContainerArtistSong = ({ artistSong, loadingSong, onClick }: IProp) => {
  NextMusixEffect(artistSong);
  return (
    <>
      <div className="mt-4">
        {artistSong ? (
          artistSong.length > 0 &&
          artistSong.map((song, index) => {
            return <SongItem key={song.encodeId} song={song} index={index} />;
          })
        ) : (
          <Title>Không tìm thấy bài hát</Title>
        )}
      </div>
      {artistSong && (
        <div className="flex items-center justify-center">
          {loadingSong ? (
            <div className="flex items-center justify-center my-6">
              <Loading />
            </div>
          ) : (
            <button
              onClick={onClick}
              className="my-6 text-primary active:text-text2"
            >
              Xem thêm
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default memo(ContainerArtistSong);
