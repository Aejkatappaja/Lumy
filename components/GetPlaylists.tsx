import { Card } from '@/components/video/Card';
import { getPlayList } from '@/lib/getPlaylists';
import { strings } from '@/utils/strings';

export default async function GetPlaylists() {
  const data = await getPlayList();

  return (
    <Card variant='playlists' apiData={data} text={strings.playlists.all} />
  );
}
