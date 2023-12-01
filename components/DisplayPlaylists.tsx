import { getPlayList } from '@/lib/getPlaylists';
import { PlaylistWrapper } from './playlist/PlaylistWrapper';

export default async function DisplayPlaylists() {
  const data = await getPlayList();
  if (!data) {
    throw new Error();
  }
  console.log(data);

  return <PlaylistWrapper data={data} />;
}
