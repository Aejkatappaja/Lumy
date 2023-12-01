interface IPlaylist {
  playlist: number[];
}

export type IVideos = {
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
};

export type ITotalVideos = { data: IVideos[] };
export async function getLastVideos(): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${url}/items/video?sort=-date_published`, {
      method: 'GET',
    });

    const response: ITotalVideos = await res.json();

    console.log(response, 'response');

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
