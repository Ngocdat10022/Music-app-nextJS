import React, { createContext } from "react";
import {
  IArtistsTrending,
  IDataBanner,
  IDataMusicSpring,
  IDataNewRelease,
} from "../constant/interface";

interface HomeContext {
  dataBanner: IDataBanner[];
  // setDataBanner?: React.Dispatch<React.SetStateAction<IDataBanner[]>>;
  musicSpring: IDataMusicSpring[];
  // setMusicSpring?: React.Dispatch<React.SetStateAction<IDataMusicSpring[]>>;
  newRelease: IDataNewRelease[];
  // setNewRelease?: React.Dispatch<React.SetStateAction<IDataNewRelease[]>>;
  artistsTrending: IArtistsTrending[];
  newDayMusic: IDataMusicSpring[];
  conner: IDataMusicSpring[];
}
export const dataHomeDefault = {
  dataBanner: [],
  // setDataBanner: () => {},
  musicSpring: [],
  // setMusicSpring: () => {},
  newRelease: [],
  // setDataNewRelease: () => {},
  artistsTrending: [],
  newDayMusic: [],
  conner: [],
};
export const HomeContext = createContext<HomeContext>(dataHomeDefault);
