import { ITotalVideos } from '@/types';

export async function getVideosById({
  id,
}: {
  id?: string;
}): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${url}/items/video?filter[id]=${id}`, {
      method: 'GET',
    });

    const response: ITotalVideos = await res.json();

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
