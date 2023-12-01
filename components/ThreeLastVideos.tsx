import { Card } from '@/components/video/Card';
import { getLastVideos } from '@/lib/getLastVideos';

export default async function GetThreeLastVideos() {
  const data = await getLastVideos();

  return <Card variant='threeLastVideos' apiData={data} text='' />;
}
