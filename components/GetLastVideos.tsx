import { Card } from '@/components/video/Card';
import { getLastVideos } from '@/lib/getLastVideos';
import { strings } from '@/utils/strings';

export default async function GetLastVideos() {
  const data = await getLastVideos();

  return (
    <Card variant='lastVideos' apiData={data} text={strings.replays.last} />
  );
}
