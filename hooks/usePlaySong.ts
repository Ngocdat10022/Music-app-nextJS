import { useContext } from "react";
import { toast } from "react-toastify";
import { MusicContext } from "../context/MusicContext";
import { setCookiesSongId } from "../utils/musicCookie";

export const usePlaySong = () => {
  const { setEncodeId, setAutoPlay } = useContext(MusicContext);
  const handlePlaySong = (id: string, streamingStatus: number) => {
    if (streamingStatus === 1) {
      setCookiesSongId(id);
      setEncodeId(id);
      setAutoPlay(true);
    }
    if (streamingStatus === 2) {
      toast.error("Không thể nghe");
    }
  };
  return handlePlaySong;
};
