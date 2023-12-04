import { BlurBackground } from '@/components/BlurBackground';
import GetLastVideos from '@/components/GetLastVideos';
import GetMostViewedVideos from '@/components/GetMostViewedVideos';
import GetPlaylists from '@/components/GetPlaylists';
import HeroEHF from '@/components/HeroEHF';
import GetThreeLastVideos from '@/components/ThreeLastVideos';

export default function Home() {
  return (
    <main className='mt-10 flex min-h-screen flex-col items-center gap-14 pt-20 md:pl-12'>
      <BlurBackground />

      <GetThreeLastVideos />

      <GetLastVideos />

      <HeroEHF />

      <GetMostViewedVideos />

      <GetPlaylists />
    </main>
  );
}
