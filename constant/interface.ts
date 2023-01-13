export interface Nav {
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
export interface IDataBanner {
  banner: string;
  cover: string;
  description: string;
  encodeId: string;
  ispr: 0;
  link: string;
  target: string;
  title: string;
  type: number;
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
