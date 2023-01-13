import React, { createContext } from "react";
import { IDataBanner } from "../constant/interface";

interface HomeContext {
  dataBanner: IDataBanner[];
  setDataBanner?: React.Dispatch<React.SetStateAction<IDataBanner[]>>;
}
export const dataHomeDefault = {
  dataBanner: [],
  setDataBanner: () => {},
};
export const HomeContext = createContext<HomeContext>(dataHomeDefault);
