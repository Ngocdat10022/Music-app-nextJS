/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SongItem from "../../components/DetailPlayList/Song";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Toast from "../../components/Toast";
import { IMusicChartNewRealesa } from "../../constant/interface";
import { MusicContextProvider } from "../../context/MusicContext";
import { getArtistSong } from "../../service/api";

const ArtistSong = () => {
  const id = useRouter();
  const [artistSong, setArtistSong] = useState<IMusicChartNewRealesa[]>([]);
  const [count, setCount] = useState<number>(20);
  useEffect(() => {
    (async () => {
      try {
        const data = await getArtistSong(`${id.query.id}`, 1, count);
        console.log("data", data);
        setArtistSong(data.data.items);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [id.query.id, count]);
  const handleSetCount = () => {
    setCount(count + 10);
  };
  return (
    <MusicContextProvider>
      <Layout>
        <div className="mt-4">
          {artistSong ? (
            artistSong.length > 0 &&
            artistSong.map((song, index) => {
              return (
                <SongItem key={song.encodeId} song={song} index={index + 1} />
              );
            })
          ) : (
            <Title>Không tìm thấy bài hát</Title>
          )}
        </div>
        {artistSong && (
          <div className="flex items-center justify-center mt-6 mb-6">
            <button
              onClick={handleSetCount}
              className="text-primary active:text-text2"
            >
              Xem thêm
            </button>
          </div>
        )}
        <Toast />
      </Layout>
    </MusicContextProvider>
  );
};

export default ArtistSong;
