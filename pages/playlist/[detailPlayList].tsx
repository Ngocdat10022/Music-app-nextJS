/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { lazy, useContext } from "react";
import Artists from "../../components/DetailPlayList/Artisit";
import Button from "../../components/DetailPlayList/Button";
import Favorites from "../../components/DetailPlayList/Favorites";
import NameArtist from "../../components/DetailPlayList/NameArtist";
import ReleaseDate from "../../components/DetailPlayList/ReleaseDate";
import SongItem from "../../components/DetailPlayList/Song";
import TitleDetail from "../../components/DetailPlayList/TitleDetail";
import Title from "../../components/Title";
import { IMusicArtist, ISongDetailPlayList } from "../../constant/interface";
const Layout = lazy(() => import("../../components/Layout"));
import { MusicContextProvider } from "../../context/MusicContext";
import { getEncodeId, getPlayListDetailt } from "../../service/api";

const DetailPlayList = ({ data }: { data: any }) => {
  console.log("dataDetailtPlayList", data.data);
  const dataDetailtPlayList = data.data;
  const dataSongs: ISongDetailPlayList[] = dataDetailtPlayList.song.items;
  const dataArtist: IMusicArtist[] = dataDetailtPlayList.artists;
  console.log("dataArtist", dataArtist);

  return (
    <MusicContextProvider>
      <Layout>
        <div className="flex items-start h-full gap-2 max-lg:flex-col max-lg:items-center">
          <div className="relative hidden max-md:block">
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden blur-lg">
              <img
                className="w-full h-full"
                src={`${dataDetailtPlayList.thumbnailM}`}
                alt=""
              />
            </div>
            <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-maxsm:w-[150px] max-maxsm:h-[150px]  w-[200px] h-[200px] overflow-hidden rounded-md">
              <img
                className="w-full h-full"
                src={`${dataDetailtPlayList.thumbnailM}`}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col max-md:hidden items-center  w-[30%] gap-2">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full "
                src={`${dataDetailtPlayList.thumbnailM}`}
              />
            </div>
            <div className="flex flex-col items-center">
              <TitleDetail>{dataDetailtPlayList?.title}</TitleDetail>
              <ReleaseDate>
                {`cập nhật ${dataDetailtPlayList?.releaseDate}`}
              </ReleaseDate>
              <NameArtist>{dataDetailtPlayList?.artistsNames}</NameArtist>
              <Favorites>{`${dataDetailtPlayList?.like} người yêu thích`}</Favorites>
              <div>
                <Button>Phát ngẫu nhiên</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 pb-20 mt-5 ">
            <div className="text-sm text-text1">
              <p>{`Lời tựa:  ${dataDetailtPlayList?.description}`}</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between w-full text-xs header text-text2">
                <div className="media-left w-[50%]">BÀI HÁT</div>
                <div className="media-content max-sm:hidden">ALBUM</div>
                <div className="media-right max-sm:hidden">THỜI GIAN</div>
              </div>
              <div className="flex flex-col scroll-bar">
                {dataSongs.length > 0 &&
                  dataSongs.map((song, index) => {
                    return (
                      <SongItem
                        key={song.encodeId}
                        song={song}
                        index={index + 1}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div>
          {dataArtist && <Title>Nghệ Sĩ Tham Gia</Title>}
          <div className="grid w-full grid-cols-5 gap-4 mx-auto mt-5 max-md:grid-cols-2 max-lg:grid-cols-4">
            {dataArtist &&
              dataArtist.length > 0 &&
              dataArtist.map((artists) => {
                return <Artists key={artists.id} artist={artists} />;
              })}
          </div>
        </div>
      </Layout>
    </MusicContextProvider>
  );
};
export const getStaticPaths = async () => {
  const paths = await getEncodeId();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (paths: any) => {
  const params = paths.params;
  const data = await getPlayListDetailt(params.detailPlayList);
  return {
    props: {
      data,
    },
  };
};
export default DetailPlayList;
