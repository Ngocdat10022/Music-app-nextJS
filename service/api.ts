import api from "../axios/axios";
export const getSearch = async (query?: string) => {
  const searchResult = await api.get(`search?keyword=${query}`);
  return searchResult.data;
};

export const getTheSong = async (encodeId: string) => {
  const song = await api.get(`song?id=${encodeId}`);
  return song;
};

export const getInfoSong = async (id: string) => {
  const infoSongData = await api.get(`infosong?id=${id}`);
  return infoSongData.data;
};

export const getDataHome = async (page: number) => {
  const dataHome = await api.get(`home?page=${page}`);
  return dataHome.data;
};
export const getTop100 = async () => {
  const dataTop100 = await api.get(`top100`);
  return dataTop100.data;
};
export const getPlayListDetailt = async (idPlayList: string) => {
  const dataPlayListDetailt = await api.get(`detailplaylist?id=${idPlayList}`);
  return dataPlayListDetailt.data;
};
export const getEncodeId = async () => {
  const data = await getDataHome(1);
  const dataTop100 = await getTop100();

  // const dataBannerHome = data?.data?.items[0].items;
  const dataOutstanding = dataTop100.data[0]?.items;
  const dataVietNamese = dataTop100.data[1]?.items;
  const dataAsia = dataTop100.data[2]?.items;
  const dataUsUk = dataTop100.data[2]?.items;
  const dataSymphony = dataTop100.data[2]?.items;

  const dataMusicSpring = data?.data.items[2].items;
  const dataArtistsTrending = data?.data.items[5].items;
  const dataNewDayMusic = data?.data.items[7].items;
  const dataConner = data?.data.items[13].items;
  const allData = [
    ...dataMusicSpring,
    ...dataArtistsTrending,
    ...dataNewDayMusic,
    ...dataConner,
    ...dataOutstanding,
    ...dataVietNamese,
    ...dataAsia,
    ...dataUsUk,
    ...dataSymphony,
  ];
  return allData.map((item: any) => {
    return {
      params: {
        detailPlayList: `${item?.encodeId.toString()}`,
      },
    };
  });
};
4;
