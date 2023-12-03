import { ITotalVideos } from '@/types';

export async function getVideosByPlaylistId(
  id?: string
): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      `https://api.brest.life/items/video/?sort=-date_published&filter[playlist][playlist_id][_eq]=${id}`,

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
