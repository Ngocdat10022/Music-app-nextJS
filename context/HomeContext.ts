import React, { createContext } from "react";
import {
  IArtistsTrending,
  IDataBannerPlayList,
  IDataMusicSpring,
  IDataNewRelease,
} from "../interface/interface";

interface HomeContext {
  dataBanner: IDataBannerPlayList[];
  musicSpring: IDataMusicSpring[];
  newRelease: IDataNewRelease[];
  artistsTrending: IArtistsTrending[];
  newDayMusic: IDataMusicSpring[];
  conner: IDataMusicSpring[];
  dataTitles: {}[];
}
export const dataHomeDefault = {
  dataBanner: [],
  musicSpring: [],
  newRelease: [],
  artistsTrending: [],
  newDayMusic: [],
  conner: [],
  dataTitles: [],
};
export const HomeContext = createContext<HomeContext>(dataHomeDefault);
