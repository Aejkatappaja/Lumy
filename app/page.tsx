import { BlurBackground } from '@/components/BlurBackground';
import GetLastVideos from '@/components/GetLastVideos';
import GetMostViewedVideos from '@/components/GetMostViewedVideos';
import GetPlaylists from '@/components/GetPlaylists';
import HeroEHF from '@/components/HeroEHF';
import GetThreeLastVideos from '@/components/ThreeLastVideos';

export default function Home() {
  return (
    <main className='mt-10 flex min-h-screen flex-col  items-center gap-14 pl-12 pt-20'>
      <BlurBackground />

      <GetThreeLastVideos />

      <GetLastVideos />

      <HeroEHF />

      <GetMostViewedVideos />

      <GetPlaylists />
    </main>
  );
}
