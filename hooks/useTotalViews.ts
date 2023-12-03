import React from 'react';
import { getVideosByPlaylistId } from '@/lib/getVideosByPlaylistId';
import { ITotalVideos } from '@/types';

interface TotalViewsData {
  totalViews: number;
  videos: ITotalVideos | null;
}

const useTotalViews = (playlistId: string | undefined): TotalViewsData => {
  const [totalViews, setTotalViews] = React.useState<number>(0);
  const [videos, setVideos] = React.useState<ITotalVideos | null>(null);

  React.useEffect(() => {
    const fetchTotalViews = async () => {
      try {
        if (playlistId) {
          const video = await getVideosByPlaylistId(playlistId);

          if (video && video.data) {
            const views = video.data.reduce(
              (sum, item) => sum + (item.view_count ?? 0),
              0
            );
            setTotalViews(views || 0);
            setVideos(video);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTotalViews();

    return () => {};
  }, [playlistId]);

  return { totalViews, videos };
};

export default useTotalViews;
