import { IPlaylists } from '@/types';

export async function getPlayList(
  id?: string
): Promise<IPlaylists | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      !id ? `${url}/items/playlist` : `${url}/items/playlist?filter[id]=${id}`,

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
