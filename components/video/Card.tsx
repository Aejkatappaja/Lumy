'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { ITotalVideos } from '@/lib/getVideos';
import { useRouter } from 'next/navigation';

interface CardProps {
  apiData: ITotalVideos | undefined;
  className?: string;
  text: string;
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const router = useRouter();
  let slidesPerView: number;
  let breadcrumbs: boolean;
  switch (props.variant) {
    case 'match':
      slidesPerView = 2.45;
      breadcrumbs = true;
      break;
    case 'lastReplay':
      slidesPerView = 4.2;
      breadcrumbs = false;

    default:
      slidesPerView = 3;
      breadcrumbs = false;
      break;
  }
  return (
    <div className='flex w-full flex-col space-y-6'>
      <div className='flex justify-between pr-12 font-bold'>
        <h1 className='text-3xl'>{props.text.toUpperCase()} </h1>
        <button className='rounded-xl bg-[#404040] px-4 py-2'>Voir tout</button>
      </div>
      {breadcrumbs && (
        <div className='flex'>
          <span className='rounded-3xl border bg-[#404040] px-4 py-2'>
            2013-15-12
          </span>{' '}
        </div>
      )}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='flex h-96 w-full border'
      >
        {props.apiData?.data?.map((item) => {
          const { id, title } = item;
          return (
            <SwiperSlide
              key={title}
              className='h-96 w-1/2 border'
              onClick={() => router.push(`/video/${id}`)}
            >
              <h1 key={title}> {title}</h1>
            </SwiperSlide>
          );
        })}
      </Swiper>{' '}
    </div>
  );
};
