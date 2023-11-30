import { Card } from '@/components/video/Card';
import { getVideosList } from '@/lib/getVideos';
import { strings } from '@/utils/strings';

export default async function GetMostViewedVideos() {
  const view = true;
  const data = await getVideosList({ view });

  return (
    <Card variant='mostViewed' apiData={data} text={strings.mostViewed.all} />
  );
}
