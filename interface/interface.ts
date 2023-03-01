export interface Nav {
  id: number;
  title: string;
  icon: React.ReactNode;
  to: string;
}

export interface IMsuicSongs {
  album: {};
  allowAudioAds: boolean;
  artists: {}[];
  artistsNames: string;
  duration: number;
  encodeId: string;
  genreIds: string[];
  hasLyric: boolean;
  indicators: [];
  isIndie: boolean;
  isOffical: boolean;
  isPrivate: boolean;
  isWorldWide: boolean;
  link: string;
  preRelease: boolean;
  releaseDate: number;
  streamingStatus: number;
  thumbnail: string;
  thumbnailM: string;
  title: string;
  username: string;
  zingChoice: boolean;
}
export interface IMusicChartNewRealesa extends IMsuicSongs {
  alias: string;
  rakingStatus: number;
  releasedAt: number;
}
export interface ISongDetailPlayList extends IMsuicSongs {
  alias: string;
}
export interface IMusicArtist {
  alias: string;
  id: string;
  isOA: boolean;
  isOABrand: boolean;
  link: string;
  name: string;
  playlistId: string;
  spotlight: boolean;
  thumbnail: string;
  thumbnailM: string;
  totalFollow: number;
}
export interface IDataBannerPlayList {
  banner: string;
  cover: string;
  description: string;
  encodeId: string;
  ispr: 0;
  link: string;
  target: string;
  title: string;
  type: number;
  streamingStatus: number;
}
export interface IDataBannerPlay {}

export interface IDataBannerRadio {}
export interface IDataMusicSpring {
  PR: boolean;
  artists: [];
  artistsNames: string;
  encodeId: string;
  genreIds: string[];
  isAlbum: boolean;
  isIndie: boolean;
  isPrivate: boolean;
  isShuffle: boolean;
  isSingle: boolean;
  isoffical: boolean;
  link: string;
  playItemMode: number;
  releaseDate: string;
  sortDescription: string;
  subType: number;
  textType: string;
  thumbnail: string;
  thumbnailM: string;
  title: string;
  uid: number;
  userName: string;
}
export interface IArtistsTrending {
  artists: {}[];
  artistsNames: string;
  encodeId: string;
  link: string;
  sortDescription: string;
  thumbnail: string;
  thumbnailM: string;
  title: string;
}
export interface IInfoSong {
  title: string;
  nameArtists: string;
  urlImage: string;
}
export type infoSong = {
  title: string;
  nameArtists: string;
  urlImage: string;
};

export interface IDataNewRelease {
  all: ISongDetailPlayList[];
  others: ISongDetailPlayList[];
  vPop: ISongDetailPlayList[];
}

export interface IVideoItem {
  alias: string;
  artist: {};
  artists: {}[];
  artistsNames: string;
  duration: number;
  encodeId: string;
  isOffical: boolean;
  isWorldWide: boolean;
  link: string;
  streamingStatus: number;
  thumbnail: string;
  thumbnailM: string;
  title: string;
  username: string;
}

export interface IVideoDetail {}
