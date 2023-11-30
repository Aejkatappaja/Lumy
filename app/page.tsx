import GetLastVideos from '@/components/GetLastVideos';
import GetMostViewedVideos from '@/components/GetMostViewedVideos';
import GetPlaylists from '@/components/GetPlaylists';
import HeroEHF from '@/components/HeroEHF';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  gap-14 pl-12 pt-20'>
      <GetLastVideos />
      <HeroEHF />
      <GetMostViewedVideos />
      <GetPlaylists />
    </main>
  );
}
