import { ITotalVideos, IVideos, getVideosList } from '@/lib/getVideos';
import React from 'react';

export interface IUseFetch {
  lastPublished?: boolean;
}

export const useFetch = (lastPublished?: IUseFetch) => {
  const [apiData, setApiData] = React.useState<ITotalVideos | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      const fetchVideos = async () => {
        const videos: ITotalVideos | undefined = await getVideosList();

        setApiData(videos);
      };
      fetchVideos();
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [lastPublished]);
  return { apiData, isLoading };
};
