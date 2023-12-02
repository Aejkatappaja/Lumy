export interface IPlaylist {
  playlist: number[];
}

export interface IVideos {
  id: string;
  status: string;
  sort: null;
  youtube_id: string;
  title: string;
  description: string;
  cover: string;
  duration: number;
  view_count: number;
  like_count: number;
  date_published: string;
  playlist: IPlaylist;
}

export interface ITotalVideos {
  data: IVideos[];
}

export interface IVideo {
  video: number[];
}

export interface IDetailedPlaylist {
  id: number;
  sort: null;
  youtube_id: string;
  title: string;
  description: string;
  cover: string;
  duration: number;
  view_count: number;
  like_count: number;
  date_published: string;
  video: IVideo;
}

export interface IPlaylists {
  data: IDetailedPlaylist[];
}
