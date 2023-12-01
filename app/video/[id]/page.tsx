'use client';

import { Text } from '@/components/video/Text';

import { Metadata } from 'next';
import { useParams } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BBH | Videos',
  description: 'BBH Videos Page',
};

export default function Videos() {
  let cover;

  return (
    <div className='mt-8 flex h-full flex-col px-24'>
      <div className='h-[681px] bg-white '></div>
      <div className='flex h-[457px] items-center justify-center'>
        <section className='flex w-[768px] flex-col gap-[34px] '>
          {/* <h1 className='truncate text-5xl font-bold'>
            {apiData?.data[0]?.title}
          </h1>{' '} */}
          <Text text='Il y a 3 jours' />
          {/* <p>{apiData?.data[0]?.description}</p> */}
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
  );
}
