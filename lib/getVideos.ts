import { ITotalVideos } from '@/types';

export async function getVideosList({
  id,
  view,
}: {
  id?: string;
  view?: boolean;
}): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      id
        ? `${url}/items/video?filter[id][_eq]=${id}`
        : view
          ? `${url}/items/video?sort=-view_count`
          : `${url}/items/video`,
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
