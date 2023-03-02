import React, { useState, createContext, useEffect, useContext } from "react";
import UseDebounce from "../hooks/useDebounce";
import { getInfoSong, getSearch, getTheSong } from "../service/api";
import { IInfoSong, IMsuicSongs, IMusicArtist } from "../interface/interface";
import { useLoading } from "../hooks/useLoading";
import { toast } from "react-toastify";
import { usePlaySong } from "../hooks/usePlaySong";
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
  loadingSearch: boolean;
  setLoadingSearch: React.Dispatch<React.SetStateAction<boolean>>;
  loadingSong: boolean;
  setLoadingSong: React.Dispatch<React.SetStateAction<boolean>>;
  indexSong: number;
  setIndexSong: React.Dispatch<React.SetStateAction<number>>;
  NextMusixEffect?: () => void;
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
  loadingSearch: false,
  setLoadingSearch: () => {},
  loadingSong: false,
  setLoadingSong: () => {},
  indexSong: 0,
  setIndexSong: () => {},
  NextMusixEffect: () => {},
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
  const [indexSong, setIndexSong] = useState<number>(
    MusicDefaultData.indexSong
  );
  const { loading: loadingSearch, setLoading: setLoadingSearch } =
    useLoading(false);
  const { loading: loadingSong, setLoading: setLoadingSong } =
    useLoading(false);
  const [infoSong, setInfoSong] = useState<IInfoSong[]>(
    MusicDefaultData.infoSong
  );
  const debouncedValue = UseDebounce(searchValue, 500);

  useEffect(() => {
    const fetchSongSearch = async () => {
      setLoadingSearch(true);
      const result = await getSearch(debouncedValue);
      if (result.data.songs && result.data.artists) {
        setLoadingSearch(false);
        setSongs(result.data.songs || []);
        setArtists(result.data.artists || []);
      } else {
        setLoadingSearch(false);
        setArtists([]);
        setSongs([]);
      }
    };
    fetchSongSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);
  const NextMusixEffect = (data: any) => {
    const { indexSong, setIndexSong } = useContext(MusicContext);
    const { handlePlaySong } = usePlaySong();
    useEffect(() => {
      if (indexSong === data.length) setIndexSong(1);
      const idNext = data[indexSong]?.encodeId;
      handlePlaySong(idNext, data[indexSong]?.streamingStatus, indexSong);
    }, [indexSong]);
  };

  useEffect(() => {
    const fetchSong = async () => {
      setLoadingSong(true);
      try {
        const [dataSong, dataInfoSong] = await Promise.all([
          getTheSong(encodeId),
          getInfoSong(encodeId),
        ]);
        if (dataSong.status === 200) {
          if (dataSong.data.err === -1110) {
            toast.error(`${dataSong.data.msg}`);
            setLoadingSong(false);
          }
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
            setLoadingSong(false);
          }
        }
      } catch (error) {
        setLoadingSong(false);
        console.log("error", error);
      }
    };
    fetchSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        loadingSearch,
        setLoadingSearch,
        loadingSong,
        setLoadingSong,
        indexSong,
        setIndexSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
