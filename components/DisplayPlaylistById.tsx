import { getPlayList } from '@/lib/getPlaylists';
import { PlaylistByIdWrapper } from './playlists/PlaylistByIdWrapper';

export default async function DisplayPlaylists({ id }: { id: string }) {
  const data = await getPlayList(id);
  if (!data) {
    throw new Error();
  }

  return <PlaylistByIdWrapper data={data} />;
}
