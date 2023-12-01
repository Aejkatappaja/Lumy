import { BlurBackground } from '@/components/BlurBackground';
import GetLastVideos from '@/components/GetLastVideos';
import GetMostViewedVideos from '@/components/GetMostViewedVideos';
import GetPlaylists from '@/components/GetPlaylists';
import HeroEHF from '@/components/HeroEHF';
import { Spinner } from '@/components/Spinner';
import GetThreeLastVideos from '@/components/ThreeLastVideos';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  gap-14 pl-12 pt-20'>
      <BlurBackground />
      <Suspense fallback={<Spinner />}>
        <GetThreeLastVideos />
      </Suspense>{' '}
      <Suspense fallback={<Spinner />}>
        <GetLastVideos />
      </Suspense>
      <HeroEHF />
      <Suspense fallback={<Spinner />}>
        <GetMostViewedVideos />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <GetPlaylists />
      </Suspense>
    </main>
  );
}
