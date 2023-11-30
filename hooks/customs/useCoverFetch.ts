import { ICover, getCover } from '@/lib/getCover';
import React from 'react';

export const useCoverFetch = (cover: string) => {
  const [apiData, setApiData] = React.useState<ICover | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      const fetchCover = async (cover: string) => {
        const result: ICover | undefined = await getCover(cover);

        if (cover) {
          setApiData(result);
          console.log(result, 'result');
        }
      };
      fetchCover(cover);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [cover]);
  return { apiData, isLoading };
};
