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
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const valueVideoContext = {
  loading: false,
  setLoading: () => {},
  listVideo: [],
  setListVideo: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
};

export const VideoContext = createContext<IVideoContext>(valueVideoContext);

export const VideoContextProvider = ({ children }: IPropVideoContext) => {
  const [listVideo, setListVideo] = useState<IVideoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(1);
  console.log("listVideo", listVideo);
  useEffect(() => {
    (async () => {
      try {
        const dataListVideo = await getlistMV("IWZ9Z08I", pageIndex, 20);
        setListVideo(dataListVideo?.data?.items);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [pageIndex]);
  return (
    <VideoContext.Provider
      value={{
        listVideo,
        loading,
        setLoading,
        setListVideo,
        pageIndex,
        setPageIndex,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
