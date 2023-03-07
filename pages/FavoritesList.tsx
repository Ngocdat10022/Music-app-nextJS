import React from "react";
import SongItem from "../components/DetailPlayList/Song";
import Title from "../components/Title";
import { NextMusixEffect } from "../constant/globalFunc";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ISongDetailPlayList } from "../interface/interface";

const FavoritesList = () => {
  const NEXT_PUBLIC_MUSIC_FAVORITE_KEY = process.env.NEXT_PUBLIC_MUSIC_FAVORITE;

  const [storedValue] = useLocalStorage(
    `${NEXT_PUBLIC_MUSIC_FAVORITE_KEY}`,
    []
  );

  NextMusixEffect(storedValue);

  return (
    <>
      <Title>Favorites</Title>
      <div className="mt-4">
        {storedValue.length > 0 &&
          storedValue.map((song: ISongDetailPlayList, index: number) => {
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
