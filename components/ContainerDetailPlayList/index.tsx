/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from "react";
import { IMusicArtist, ISongDetailPlayList } from "../../interface/interface";
import { usePlaySong } from "../../hooks/usePlaySong";
import Artists from "../DetailPlayList/Artisit";
import Button from "../DetailPlayList/Button";
import Favorites from "../DetailPlayList/Favorites";
import NameArtist from "../DetailPlayList/NameArtist";
import ReleaseDate from "../DetailPlayList/ReleaseDate";
import SongItem from "../DetailPlayList/Song";
import TitleDetail from "../DetailPlayList/TitleDetail";
import Title from "../Title";
import { NextMusixEffect } from "../../constant/globalFunc";
const DetaiPlayList = ({ data }: { data: any }) => {
  const dataDetailtPlayList = data.data;
  const dataSongs: ISongDetailPlayList[] = dataDetailtPlayList.song.items;
  const dataArtist: IMusicArtist[] = dataDetailtPlayList.artists;
  NextMusixEffect(dataSongs);
  const { handlePlaySong } = usePlaySong();
  const randomSong = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * dataSongs.length);
    const encodeId = dataSongs[randomIndex].encodeId;
    const streamStatus = dataSongs[randomIndex].streamingStatus;
    handlePlaySong(encodeId, streamStatus, randomIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSongs.length]);

  return (
    <>
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
          <div className="flex items-center justify-center">
            <Button onClick={randomSong}>Phát ngẫu nhiên</Button>
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
              <Button onClick={randomSong}>Phát ngẫu nhiên</Button>
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
                    <SongItem key={song.encodeId} song={song} index={index} />
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
              return <Artists key={artists?.id} artist={artists} />;
            })}
        </div>
      </div>
    </>
  );
};

export default DetaiPlayList;
