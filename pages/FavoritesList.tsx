import React, { useContext } from "react";
import SongItem from "../components/DetailPlayList/Song";
import Title from "../components/Title";
import { NextMusixEffect } from "../constant/globalFunc";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ISongDetailPlayList } from "../interface/interface";
import { MusicContext } from "../context/MusicContext";

const FavoritesList = () => {
  const { musicPlayList } = useContext(MusicContext);

  // const [storedValue] = useLocalStorage(
  //   `${NEXT_PUBLIC_MUSIC_FAVORITE_KEY}`,
  //   []
  // );

  NextMusixEffect(musicPlayList);

  return (
    <>
      <Title>Favorites</Title>
      <div className="mt-4">
        {musicPlayList.length > 0 &&
          musicPlayList.map((song: ISongDetailPlayList, index: number) => {
            return (
              <SongItem
                isbtnDelete={true}
                key={song.encodeId}
                song={song}
                index={index}
              />
            );
          })}
      </div>
    </>
  );
};

export default FavoritesList;
