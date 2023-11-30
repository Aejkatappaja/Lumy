export type ICover = any;

export async function getCover(cover: string): Promise<ICover | undefined> {
  try {
    const res = await fetch(`https://api.brest.life/assets/${cover}`, {
      next: { revalidate: 0 },
      method: 'GET',
    });

    const response: ICover = await res.json();

    console.log(response, 'response');

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
