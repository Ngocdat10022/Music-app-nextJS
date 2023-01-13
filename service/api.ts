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
export const getPlayListDetailt = async (idPlayList: string) => {
  const dataPlayListDetailt = await api.get(`detailplaylist?id=${idPlayList}`);
  return dataPlayListDetailt.data;
};
export const getEncodeId = async () => {
  const data = await getDataHome(1);
  // const dataBannerHome = data?.data?.items[0].items;
  const dataMusicSpring = data?.data.items[2].items;
  return dataMusicSpring.map((item: any) => {
    return {
      params: {
        detailPlayList: `${item?.encodeId.toString()}`,
      },
    };
  });
};
4;
