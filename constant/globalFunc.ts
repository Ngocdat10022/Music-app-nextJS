import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../context/MusicContext";
import { usePlaySong } from "../hooks/usePlaySong";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const NextMusixEffect = (data: any) => {
  const [mounted, setMounted] = useState(false);
  const { indexSong, setIndexSong } = useContext(MusicContext);
  const { handlePlaySong } = usePlaySong();
  useEffect(() => {
    if (mounted) {
      if (indexSong === data.length) setIndexSong(1);
      const idNext = data[indexSong]?.encodeId;
      handlePlaySong(idNext, data[indexSong]?.streamingStatus, indexSong);
    } else setMounted(true);
  }, [indexSong]);
};
