import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import { setCookiesSongId } from "../utils/musicCookie";

export const usePlaySong = () => {
  const { setEncodeId, setAutoPlay } = useContext(MusicContext);
  const handlePlaySong = (id: string) => {
    setCookiesSongId(id);
    setEncodeId(id);
    setAutoPlay(true);
  };
  return handlePlaySong;
};
