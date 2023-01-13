import React, { createContext } from "react";
import { IDataBanner, IDataMusicSpring } from "../constant/interface";

interface HomeContext {
  dataBanner: IDataBanner[];
  setDataBanner?: React.Dispatch<React.SetStateAction<IDataBanner[]>>;
  musicSpring: IDataMusicSpring[];
  setMusicSpring: React.Dispatch<React.SetStateAction<IDataMusicSpring[]>>;
}
export const dataHomeDefault = {
  dataBanner: [],
  setDataBanner: () => {},
  musicSpring: [],
  setMusicSpring: () => {},
};
export const HomeContext = createContext<HomeContext>(dataHomeDefault);
