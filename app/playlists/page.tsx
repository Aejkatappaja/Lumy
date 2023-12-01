import DisplayPlaylists from '@/components/DisplayPlaylists';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBH | Playlists',
  description: 'BBH Videos Playlists',
};

export default function Playlist() {
  return <DisplayPlaylists />;
}
