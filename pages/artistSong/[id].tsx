/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ContainerArtistSong from "../../components/ContainerArtistSong";
import { IMusicChartNewRealesa } from "../../interface/interface";
import { useLoading } from "../../hooks/useLoading";
import { getArtistSong } from "../../service/api";

const ArtistSong = () => {
  const id = useRouter();
  const [artistSong, setArtistSong] = useState<IMusicChartNewRealesa[]>([]);
  const [count, setCount] = useState<number>(20);
  const { loading: loadingSong, setLoading: setLoadingSong } =
    useLoading(false);
  useEffect(() => {
    (async () => {
      setLoadingSong(true);
      try {
        const data = await getArtistSong(`${id.query.id}`, 1, count);
        setArtistSong(data.data.items);
        setLoadingSong(false);
      } catch (error) {
        console.log("error", error);
        setLoadingSong(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id.query.id, count]);
  const handleSetCount = useCallback(() => {
    setCount(count + 10);
  }, [count]);
  return (
    <>
      <ContainerArtistSong
        artistSong={artistSong}
        loadingSong={loadingSong}
        onClick={handleSetCount}
      />
    </>
  );
};

export default ArtistSong;
