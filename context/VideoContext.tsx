import React, { createContext, useEffect, useState } from "react";
import { IVideoItem } from "../interface/interface";
import { useLoading } from "../hooks/useLoading";
import { getlistMV } from "../service/api";

interface IPropVideoContext {
  children: React.ReactNode;
}

interface IVideoContext {
  loadingVideo: boolean;
  setLoadingVideo: React.Dispatch<React.SetStateAction<boolean>>;
  listVideo: IVideoItem[];
  setListVideo: React.Dispatch<React.SetStateAction<IVideoItem[]>>;
  linitIndex: number;
  setLimitIndex: React.Dispatch<React.SetStateAction<number>>;
}

const valueVideoContext = {
  loadingVideo: false,
  setLoadingVideo: () => {},
  listVideo: [],
  setListVideo: () => {},
  linitIndex: 20,
  setLimitIndex: () => {},
};

export const VideoContext = createContext<IVideoContext>(valueVideoContext);

export const VideoContextProvider = ({ children }: IPropVideoContext) => {
  const [listVideo, setListVideo] = useState<IVideoItem[]>([]);
  const { loading: loadingVideo, setLoading: setLoadingVideo } =
    useLoading(false);
  const [linitIndex, setLimitIndex] = useState<number>(20);
  useEffect(() => {
    (async () => {
      setLoadingVideo(true);
      try {
        const dataListVideo = await getlistMV("IWZ9Z08I", 1, linitIndex);
        setListVideo(dataListVideo?.data?.items);
        setLoadingVideo(false);
      } catch (error) {
        setLoadingVideo(false);
        console.log("error", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linitIndex]);
  return (
    <VideoContext.Provider
      value={{
        listVideo,
        loadingVideo,
        setLoadingVideo,
        setListVideo,
        linitIndex,
        setLimitIndex,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
