interface IVideo {
  video: number[];
}

export type IPlaylist = {
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
};

export type IPlaylists = { data: IPlaylist[] };
export async function getPlayList(
  id?: string
): Promise<IPlaylists | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      `${url}/items/playlist`,

      {
        method: 'GET',
      }
    );

    const response: IPlaylists = await res.json();

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
