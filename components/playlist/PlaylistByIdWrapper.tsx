import { IPlaylists } from '@/lib/getPlaylists';
import React from 'react';

interface PlaylistByIdWrapperProps {
  data: IPlaylists;
}

export const PlaylistByIdWrapper: React.FC<PlaylistByIdWrapperProps> = ({
  data,
}) => {
  return <div>PlaylistByIdWrapper</div>;
};
