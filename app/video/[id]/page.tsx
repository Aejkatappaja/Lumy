'use client';

import { Text } from '@/components/video/Text';
import { useCoverFetch } from '@/hooks/customs/useCoverFetch';
import { useFetchVideo } from '@/hooks/customs/useFetchVideo';
import { Metadata } from 'next';
import { useParams } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BBH | Videos',
  description: 'BBH Videos Page',
};

export default function Videos() {
  let cover;
  const params = useParams();
  const { id } = params;
  const video = useFetchVideo(id.toString());
  const { apiData, isLoading } = video;
  if (video) {
    cover = useCoverFetch(apiData?.data[0]?.cover as string);
    console.log(cover?.apiData);
  }

  return !isLoading ? (
    <div className='mt-8 flex h-full flex-col px-24'>
      <div className='h-[681px] bg-white '></div>
      <div className='flex h-[457px] items-center justify-center'>
        <section className='flex w-[768px] flex-col gap-[34px] '>
          <h1 className='truncate text-5xl font-bold'>
            {apiData?.data[0]?.title}
          </h1>{' '}
          <Text text='Il y a 3 jours' />
          <p>{apiData?.data[0]?.description}</p>
          <div className='flex space-x-6'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold'>1.4k </h1>
              <Text text='Vues' />
            </div>
            <div className=' border'></div>
            <div className='flex- flex-col'>
              <h1 className=' text-2xl font-bold'>3280 </h1>
              <Text text="J'aime" />
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <div>LOADING !</div>
  );
}
