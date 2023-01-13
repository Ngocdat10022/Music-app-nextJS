import { Inter } from "@next/font/google";
import { useState } from "react";
import ContainerHome from "../components/ContainerHome";
import Layout from "../components/Layout";
import { HomeContext } from "../context/HomeContext";
import { MusicContextProvider } from "../context/MusicContext";
import { IDataBanner } from "../constant/interface";
import { getDataHome } from "../service/api";
import PlayMusic from "../components/PlayMusic";
const inter = Inter({ subsets: ["latin"] });
interface Props {
  dataBannerHome: IDataBanner[];
  dataHome: [];
}
export default function Home({ dataBannerHome, dataHome }: Props) {
  const [dataBanner, setDataBanner] = useState<IDataBanner[]>(dataBannerHome);
  console.log("dataBannerHome", dataBannerHome);
  console.log("dataHome", dataHome);

  return (
    <div className="app">
      <HomeContext.Provider value={{ dataBanner, setDataBanner }}>
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
  return {
    props: {
      dataHome,
      dataBannerHome,
    },
  };
};
