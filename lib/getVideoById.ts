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
export async function getVideosById({
  id,
}: {
  id?: string;
}): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      `https://api.brest.life/items/video?filter[id]=${id}`,
      {
        method: 'GET',
      }
    );

    const response: ITotalVideos = await res.json();

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
