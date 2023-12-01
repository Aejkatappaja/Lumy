export type ICover = any;

export async function getCover(cover: string): Promise<ICover | undefined> {
  try {
    const res = await fetch(`https://api.brest.life/assets/${cover}`, {
      method: 'GET',
    });

    const response: ICover = await res.blob();

    console.log(response, 'response');

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch cover data');
  }
}
