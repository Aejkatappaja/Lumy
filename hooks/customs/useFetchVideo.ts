// https://api.brest.life/items/video?filter[id][_eq]=003e6d41-6a06-4120-b4a6-c6034a70f612

import { getCover } from '@/lib/getCover';
import { ITotalVideos, getVideosList } from '@/lib/getVideos';
import React from 'react';

export const useFetchVideo = (id: string) => {
  const [apiData, setApiData] = React.useState<ITotalVideos | undefined>();
  const [cover, setCover] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    try {
      const fetchVideos = async () => {
        const videos: ITotalVideos | undefined = await getVideosList(id);
        if (videos) {
          const coverImage = await getCover(videos?.data[0]?.cover as string);
          console.log(videos?.data[0]?.cover.toString());
          setCover(coverImage);
          console.log(cover, 'cover');
          setApiData(videos);
        }
      };
      fetchVideos();
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  return { apiData, isLoading, cover };
};
