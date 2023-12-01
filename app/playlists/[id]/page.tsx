import DisplayPlaylists from '@/components/DisplayPlaylists';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBH | Playlist',
  description: 'BBH Videos Playlist',
};

export default function PlaylistId({ params }: { params: { id: string } }) {
  const { id } = params;
  return <DisplayPlaylists />;
}
