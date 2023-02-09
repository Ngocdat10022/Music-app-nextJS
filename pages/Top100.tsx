import React from "react";
import Top100Image from "../assets/Image/Top100";
import CardItem from "../components/CardItem";
import Layout from "../components/Layout";
import List from "../components/ListMusic";
import Title from "../components/Title";
import { IDataMusicSpring } from "../constant/interface";
import { MusicContext, MusicContextProvider } from "../context/MusicContext";
import { getTop100 } from "../service/api";

const Top100 = ({ data }: { data: any }) => {
  // console.log("data", data.data);
  const dataOutstanding: IDataMusicSpring[] = data.data[0]?.items;
  const dataVietNamese: IDataMusicSpring[] = data.data[1]?.items;
  const dataAsia: IDataMusicSpring[] = data.data[2]?.items;
  const dataUsUk: IDataMusicSpring[] = data.data[3]?.items;
  const dataSymphony: IDataMusicSpring[] = data.data[4]?.items;
  return (
    <MusicContextProvider>
      <Layout>
        <div className="w-full h-[300px]  flex  items-center justify-center  relative">
          <div className="h-[full]">
            <Top100Image />
          </div>
        </div>
        <Title>Nổi Bật</Title>
        <div>
          <List>
            {dataOutstanding.length > 0 &&
              dataOutstanding.map((item) => {
                return <CardItem key={item?.encodeId} item={item} />;
              })}
          </List>
        </div>
        <Title>Nhạc Việt Nam</Title>
        <div>
          <List>
            {dataVietNamese.length > 0 &&
              dataVietNamese.map((item) => {
                return <CardItem key={item?.encodeId} item={item} />;
              })}
          </List>
        </div>
        <Title>Nhạc Châu á</Title>
        <div>
          <List>
            {dataAsia.length > 0 &&
              dataAsia.map((item) => {
                return <CardItem key={item?.encodeId} item={item} />;
              })}
          </List>
        </div>
        <Title>Nhạc Âu Mỹ</Title>
        <div>
          <List>
            {dataUsUk.length > 0 &&
              dataUsUk.map((item) => {
                return <CardItem key={item?.encodeId} item={item} />;
              })}
          </List>
        </div>
        <Title>Nhạc Hoà Tấu</Title>
        <div>
          <List>
            {dataSymphony.length > 0 &&
              dataSymphony.map((item) => {
                return <CardItem key={item?.encodeId} item={item} />;
              })}
          </List>
        </div>
      </Layout>
    </MusicContextProvider>
  );
};
export const getStaticProps = async () => {
  const data = await getTop100();
  return {
    props: {
      data,
    },
  };
};
export default Top100;
