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
