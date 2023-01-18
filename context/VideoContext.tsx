import React, { createContext, useEffect, useState } from "react";
import { IVideoItem } from "../constant/interface";
import { getlistMV } from "../service/api";

interface IPropVideoContext {
  children: React.ReactNode;
}

interface IVideoContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  listVideo: IVideoItem[];
  setListVideo: React.Dispatch<React.SetStateAction<IVideoItem[]>>;
  linitIndex: number;
  setLimitIndex: React.Dispatch<React.SetStateAction<number>>;
}

const valueVideoContext = {
  loading: false,
  setLoading: () => {},
  listVideo: [],
  setListVideo: () => {},
  linitIndex: 20,
  setLimitIndex: () => {},
};

export const VideoContext = createContext<IVideoContext>(valueVideoContext);

export const VideoContextProvider = ({ children }: IPropVideoContext) => {
  const [listVideo, setListVideo] = useState<IVideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [linitIndex, setLimitIndex] = useState<number>(20);
  useEffect(() => {
    (async () => {
      try {
        const dataListVideo = await getlistMV("IWZ9Z08I", 1, linitIndex);
        setListVideo(dataListVideo?.data?.items);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [linitIndex]);
  return (
    <VideoContext.Provider
      value={{
        listVideo,
        loading,
        setLoading,
        setListVideo,
        linitIndex,
        setLimitIndex,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
