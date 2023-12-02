import { useState, useEffect } from 'react';
import { getCover } from '@/lib/getCover';

const usePlaylistCover = (playlistId: string | undefined) => {
  const [coverUrl, setCoverUrl] = useState('');

  useEffect(() => {
    const fetchCover = async () => {
      try {
        if (playlistId) {
          const blobData = await getCover(playlistId);
          const imageUrl = URL.createObjectURL(blobData);
          setCoverUrl(imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCover();

    return () => {};
  }, [playlistId]);

  return coverUrl;
};

export default usePlaylistCover;
