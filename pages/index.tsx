import { Inter } from "@next/font/google";
import { useState } from "react";
import dynamic from "next/dynamic";
import { HomeContext } from "../context/HomeContext";
const ContainerHome = dynamic(() => import("../components/ContainerHome"));
import {
  IArtistsTrending,
  IDataBannerPlayList,
  IDataMusicSpring,
  IDataNewRelease,
} from "../interface/interface";
import { getDataHome, getTop100 } from "../service/api";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  dataBannerHome: IDataBannerPlayList[];
  dataHome: [];
  dataMusicSpring: [];
  dataNewRelease: IDataNewRelease;
  dataArtistsTrending: IArtistsTrending[];
  dataNewDayMusic: IDataMusicSpring[];
  dataConner: IDataMusicSpring[];
  dataTop100: {}[];
  dataTitle: {}[];
}
export default function Home({
  dataBannerHome,
  dataHome,
  dataMusicSpring,
  dataNewRelease,
  dataArtistsTrending,
  dataNewDayMusic,
  dataConner,
  dataTop100,
  dataTitle,
}: Props) {
  const dataNewReleases = [{ ...dataNewRelease }];
  const [dataBanner, setDataBanner] =
    useState<IDataBannerPlayList[]>(dataBannerHome);
  const [musicSpring, setMusicSpring] =
    useState<IDataMusicSpring[]>(dataMusicSpring);
  const [newRelease, setNewRelease] =
    useState<IDataNewRelease[]>(dataNewReleases);
  const [artistsTrending, setArtistsTrending] =
    useState<IArtistsTrending[]>(dataArtistsTrending);
  const [newDayMusic, setNewDayMusic] =
    useState<IDataMusicSpring[]>(dataNewDayMusic);
  const [conner, setConner] = useState<IDataMusicSpring[]>(dataConner);
  const [dataTitles, setDataTitles] = useState(dataTitle);
  return (
    <div className="app">
      <HomeContext.Provider
        value={{
          dataBanner,
          musicSpring,
          newRelease,
          artistsTrending,
          newDayMusic,
          conner,
          dataTitles,
        }}
      >
        <ContainerHome />
      </HomeContext.Provider>
    </div>
  );
}
export const getStaticProps = async () => {
  const [dataHome, dataTop100] = await Promise.all([
    getDataHome(1),
    getTop100(),
  ]);

  const data = dataHome?.data?.items.filter((item: any) => {
    return (
      item?.sectionType === "banner" ||
      item?.sectionType === "new-release" ||
      item?.sectionType === "playlist"
    );
  });
  // banner new-release
  const dataBannerHome = data[0].items;
  const dataNewRelease = data[1].items;
  const dataMusicSpring = data[2].items;
  const dataArtistsTrending = data[3].items;
  const dataNewDayMusic = data[4].items;
  const dataConner = data[6].items;

  const dataTitle = data.filter((itemTitle: any) => {
    return itemTitle.title;
  });
  return {
    props: {
      dataHome,
      dataBannerHome,
      dataMusicSpring,
      dataNewRelease,
      dataArtistsTrending,
      dataNewDayMusic,
      dataConner,
      dataTop100,
      dataTitle,
    },
  };
};
