import React, { useState, createContext, useEffect } from "react";
import UseDebounce from "../hooks/useDebounce";
import { getInfoSong, getSearch, getTheSong } from "../service/api";
import { IInfoSong, IMsuicSongs, IMusicArtist } from "../constant/interface";
interface Props {
  children: React.ReactNode;
}
interface IMusicContext {
  songs: IMsuicSongs[];
  setSongs: React.Dispatch<React.SetStateAction<IMsuicSongs[]>>;
  artists: IMusicArtist[];
  setArtists: React.Dispatch<React.SetStateAction<IMusicArtist[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  debouncedValue: string;
  autoPlay: boolean;
  setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
  linkPlay: string;
  setLinkPlay: React.Dispatch<React.SetStateAction<string>>;
  encodeId: string;
  setEncodeId: React.Dispatch<React.SetStateAction<string>>;
  infoSong: IInfoSong[];
  setInfoSong: React.Dispatch<React.SetStateAction<IInfoSong[]>>;
}
const MusicDefaultData = {
  songs: [],
  setSongs: () => {},
  artists: [],
  setArtists: () => {},
  searchValue: "",
  setSearchValue: () => {},
  debouncedValue: "",
  autoPlay: true,
  setAutoPlay: () => {},
  linkPlay: "",
  setLinkPlay: () => {},
  encodeId: "",
  setEncodeId: () => {},
  infoSong: [],
  setInfoSong: () => {},
};
export const MusicContext = createContext<IMusicContext>(MusicDefaultData);
export const MusicContextProvider = ({ children }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(
    MusicDefaultData.searchValue
  );
  const [songs, setSongs] = useState<IMsuicSongs[]>(MusicDefaultData.songs);
  const [artists, setArtists] = useState<IMusicArtist[]>(
    MusicDefaultData.artists
  );
  const [autoPlay, setAutoPlay] = useState<boolean>(MusicDefaultData.autoPlay);
  const [linkPlay, setLinkPlay] = useState<string>(MusicDefaultData.linkPlay);
  const [encodeId, setEncodeId] = useState<string>(MusicDefaultData.encodeId);
  const [infoSong, setInfoSong] = useState<IInfoSong[]>(
    MusicDefaultData.infoSong
  );
  const debouncedValue = UseDebounce(searchValue, 500);
  // console.log("linkPlay", linkPlay);
  // console.log("infoSong", infoSong);
  useEffect(() => {
    const fetch = async () => {
      const result = await getSearch(debouncedValue);
      console.log(result);
      if (result.data.songs && result.data.artists) {
        setSongs(result.data.songs || []);
        setArtists(result.data.artists || []);
      } else {
        setArtists([]);
        setSongs([]);
      }
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    const fetchSong = async () => {
      // const dataSong = await getTheSong(encodeId);
      const [dataSong, dataInfoSong] = await Promise.all([
        getTheSong(encodeId),
        getInfoSong(encodeId),
      ]);
      if (dataSong.status === 200) {
        // console.log("dataSong", dataSong);
        // console.log("dataInfoSong", dataInfoSong);
        if (dataSong.data.data && dataInfoSong.data) {
          const title =
            dataInfoSong.data?.title || dataInfoSong.data.album?.title;
          const nameArtists = dataInfoSong.data?.artistsNames;
          const urlImage = dataInfoSong.data?.thumbnailM;
          setLinkPlay(dataSong.data.data["128"]);
          setInfoSong([
            {
              title,
              nameArtists,
              urlImage,
            },
          ]);
        }
      }
    };
    fetchSong();
  }, [encodeId]);

  return (
    <MusicContext.Provider
      value={{
        artists,
        songs,
        searchValue,
        debouncedValue,
        setArtists,
        setSearchValue,
        setSongs,
        autoPlay,
        setAutoPlay,
        linkPlay,
        setLinkPlay,
        encodeId,
        setEncodeId,
        infoSong,
        setInfoSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
