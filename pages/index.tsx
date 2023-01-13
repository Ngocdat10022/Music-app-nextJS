import { Inter } from "@next/font/google";
import { lazy, useState } from "react";
import ContainerHome from "../components/ContainerHome";
import { HomeContext } from "../context/HomeContext";
import { MusicContextProvider } from "../context/MusicContext";
const Layout = lazy(() => import("../components/Layout"));
import { IDataBanner, IDataMusicSpring } from "../constant/interface";
import { getDataHome } from "../service/api";
const inter = Inter({ subsets: ["latin"] });
interface Props {
  dataBannerHome: IDataBanner[];
  dataHome: [];
  dataMusicSpring: [];
}
export default function Home({
  dataBannerHome,
  dataHome,
  dataMusicSpring,
}: Props) {
  const [dataBanner, setDataBanner] = useState<IDataBanner[]>(dataBannerHome);
  const [musicSpring, setMusicSpring] =
    useState<IDataMusicSpring[]>(dataMusicSpring);
  //console data
  console.log("dataBannerHome", dataBannerHome);
  console.log("dataHome", dataHome);
  console.log("dataMusicSpring", dataMusicSpring);

  return (
    <div className="app">
      <HomeContext.Provider
        value={{ dataBanner, setDataBanner, musicSpring, setMusicSpring }}
      >
        <MusicContextProvider>
          <Layout>
            <ContainerHome />
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
  return {
    props: {
      dataHome,
      dataBannerHome,
      dataMusicSpring,
    },
  };
};
