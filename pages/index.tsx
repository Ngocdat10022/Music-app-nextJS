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
import { getDataHome } from "../service/api";
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
}
export default function Home({
  dataBannerHome,
  dataHome,
  dataMusicSpring,
  dataNewRelease,
  dataArtistsTrending,
  dataNewDayMusic,
  dataConner,
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
  console.log("dataHome", dataHome);
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
  const [dataHome] = await Promise.all([getDataHome(1)]);
  const dataBannerHome = dataHome?.data?.items[0].items;
  const dataMusicSpring = dataHome?.data.items[2].items;
  const dataNewRelease = dataHome?.data.items[4].items;
  const dataArtistsTrending = dataHome?.data.items[5].items;
  const dataNewDayMusic = dataHome?.data.items[7].items;
  const dataConner = dataHome?.data.items[13].items;
  return {
    props: {
      dataHome,
      dataBannerHome,
      dataMusicSpring,
      dataNewRelease,
      dataArtistsTrending,
      dataNewDayMusic,
      dataConner,
    },
  };
};
