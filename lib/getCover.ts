export type ICover = Blob;

export async function getCover(cover: string): Promise<ICover | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(`${url}/assets/${cover}`, {
      method: 'GET',
    });

    const response: ICover = await res.blob();

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch cover data');
  }
}
