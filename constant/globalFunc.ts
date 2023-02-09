import { useContext, useEffect } from "react";
import { MusicContext } from "../context/MusicContext";
import { usePlaySong } from "../hooks/usePlaySong";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const NextMusixEffect = (data: any) => {
  const { indexSong, setIndexSong } = useContext(MusicContext);
  const { handlePlaySong } = usePlaySong();
  useEffect(() => {
    if (indexSong === data.length) setIndexSong(1);
    const idNext = data[indexSong]?.encodeId;

    !(indexSong === 0) &&
      handlePlaySong(idNext, data[indexSong]?.streamingStatus, indexSong);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSong]);
};
