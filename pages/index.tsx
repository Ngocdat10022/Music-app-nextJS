import { Inter } from "@next/font/google";
import { lazy, useState } from "react";
import ContainerHome from "../components/ContainerHome";
import { HomeContext } from "../context/HomeContext";
import { MusicContextProvider } from "../context/MusicContext";
const Layout = lazy(() => import("../components/Layout"));
import {
  IArtistsTrending,
  IDataBanner,
  IDataMusicSpring,
  IDataNewRelease,
} from "../constant/interface";
import { getDataHome, getTop100 } from "../service/api";
import Toast from "../components/Toast";
const inter = Inter({ subsets: ["latin"] });
interface Props {
  dataBannerHome: IDataBanner[];
  dataHome: [];
  dataMusicSpring: [];
  dataNewRelease: {};
  dataArtistsTrending: IArtistsTrending[];
  dataNewDayMusic: IDataMusicSpring[];
  dataConner: IDataMusicSpring[];
  dataTop100: {}[];
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
}: Props) {
  const dataNewReleases = [{ ...dataNewRelease }];
  const [dataBanner, setDataBanner] = useState<IDataBanner[]>(dataBannerHome);
  const [musicSpring, setMusicSpring] =
    useState<IDataMusicSpring[]>(dataMusicSpring);
  const [newRelease, setNewRelease] =
    useState<IDataNewRelease[]>(dataNewReleases);
  const [artistsTrending, setArtistsTrending] =
    useState<IArtistsTrending[]>(dataArtistsTrending);
  const [newDayMusic, setNewDayMusic] =
    useState<IDataMusicSpring[]>(dataNewDayMusic);
  const [conner, setConner] = useState<IDataMusicSpring[]>(dataConner);
  console.log("data", dataTop100, dataHome);
  // const [allArrayData, setAllArrayData] = useState([]);

  // const dataAll = [...dataHome?.data?.items, ...dataTop100?.data];
  // const allDatas = dataAll
  //   .map((item: any) => {
  //     if (item?.items) {
  //       if (Array.isArray(item?.items)) {
  //         return item?.items;
  //       }
  //     }
  //   })
  //   .filter((item: any) => !!item)
  //   .reduce((acc: [], crr: []) => {
  //     return acc.concat(crr);
  //   }, []);
  // console.log("allDatas", allDatas);

  // const dataH = dataHome?.data?.items.filter((item: any) => {
  //   return (
  //     item?.sectionType === "new-release" ||
  //     item?.sectionType === "banner" ||
  //     item?.sectionType === "playlist"
  //   );
  // });
  // console.log("dataH", dataH);

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
        }}
      >
        <MusicContextProvider>
          <Layout>
            <ContainerHome />
            <Toast />
          </Layout>
        </MusicContextProvider>
        {/* <PlayMusic /> */}
      </HomeContext.Provider>
    </div>
  );
}
export const getStaticProps = async () => {
  const [dataHome, dataTop100] = await Promise.all([
    getDataHome(1),
    getTop100(),
  ]);
  // const dataBannerHome = dataHome?.data.items[0].items;
  // const dataMusicSpring = dataHome?.data.items[4].items;
  // const dataArtistsTrending = dataHome?.data.items[5].items;
  // const dataNewRelease = dataHome?.data.items[3].items;
  // const dataNewDayMusic = dataHome?.data.items[7].items;
  // const dataConner = dataHome?.data.items[13].items;

  const data = dataHome?.data?.items.filter((item: any) => {
    return (
      item?.sectionType === "new-release" ||
      item?.sectionType === "banner" ||
      item?.sectionType === "playlist"
    );
  });
  const dataBannerHome = data[0].items;
  const dataNewRelease = data[1].items;
  const dataMusicSpring = data[2].items;
  const dataArtistsTrending = data[3].items;
  const dataNewDayMusic = data[4].items;
  const dataConner = data[6].items;

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
    },
  };
};
