import { getPlayList } from '@/lib/getPlaylists';
import { PlaylistWrapper } from './playlists/PlaylistWrapper';

export default async function DisplayPlaylists() {
  const data = await getPlayList();
  if (!data) {
    throw new Error();
  }

  return <PlaylistWrapper data={data} />;
}
