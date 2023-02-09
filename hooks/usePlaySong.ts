import { useContext } from "react";
import { toast } from "react-toastify";
import { MusicContext } from "../context/MusicContext";
import { setCookiesSongId } from "../utils/musicCookie";

export const usePlaySong = () => {
  const { setEncodeId, setAutoPlay, setIndexSong, indexSong } =
    useContext(MusicContext);
  const handleNextSong = () => {
    setIndexSong(indexSong + 1);
  };
  const handlePrevSong = () => {
    setIndexSong(indexSong - 1);
    if (indexSong <= 0) setIndexSong(0);
  };
  const handlePlaySong = (
    id: string,
    streamingStatus: number,
    index: number
  ) => {
    if (!streamingStatus) {
      setCookiesSongId(id);
      setEncodeId(id);
      setAutoPlay(true);
    } else {
      if (streamingStatus === 1) {
        setCookiesSongId(id);
        setEncodeId(id);
        setIndexSong(index);
        setAutoPlay(true);
      }
      if (streamingStatus === 2) {
        toast.error("Không thể phát");
        setIndexSong(index + 1);
        // setIndexSong(indexSong + 1);
      }
    }
  };
  return { handlePlaySong, handleNextSong, handlePrevSong };
};
