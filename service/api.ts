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

export const getlistMV = async (id: string, page: number, count: number) => {
  try {
    const dataListMv = await api.get("listmv", {
      params: {
        id: id,
        page: page,
        count: count,
      },
    });
    return dataListMv.data;
  } catch (err) {
    console.log(err);
  }
};

export const getArtistSong = async (
  id: string,
  page: number,
  count: number
) => {
  try {
    const dataArtistSong = await api.get(`artistsong?name=`, {
      params: {
        id: id,
        page: page,
        count: count,
      },
    });
    return dataArtistSong.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getDetailVideo = async (id: string) => {
  try {
    const data = await api.get(`video?id=${id}`);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};
export const getCategoryVideo = async (id: string) => {
  try {
    const data = await api.get(`categorymv?id=${id}`);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getMusicChart = async () => {
  try {
    const data = await api.get(`newreleasechart`);
    return data.data;
  } catch (error) {
    console.log("error", error);
  }
};
export const getEncodeId = async () => {
  const [data, dataTop100] = await Promise.all([getDataHome(1), getTop100()]);
  const dataAll = [...data?.data?.items, ...dataTop100?.data];
  const allDatas = dataAll
    .map((item: any) => {
      if (item?.items) {
        if (Array.isArray(item?.items)) {
          return item?.items;
        }
      }
    })
    .filter((item: any) => !!item)
    .reduce((acc: [], crr: []) => {
      return acc.concat(crr);
    }, [])
    .filter((item: any) => {
      return item.textType === "Playlist";
    });

  return allDatas.map((item: any) => {
    return {
      params: {
        detailPlayList: `${item?.encodeId}`,
      },
    };
  });
};
4;
