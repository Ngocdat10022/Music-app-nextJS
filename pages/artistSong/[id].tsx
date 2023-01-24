/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SongItem from "../../components/DetailPlayList/Song";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import { IMusicChartNewRealesa } from "../../constant/interface";
import { MusicContextProvider } from "../../context/MusicContext";
import { getArtistSong } from "../../service/api";

const ArtistSong = () => {
  const id = useRouter();
  const [artistSong, setArtistSong] = useState<IMusicChartNewRealesa[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getArtistSong(`${id.query.id}`, 1, 20);
        console.log("data", data);
        setArtistSong(data.data.items);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [id.query.id]);
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
      </Layout>
    </MusicContextProvider>
  );
};

export default ArtistSong;
