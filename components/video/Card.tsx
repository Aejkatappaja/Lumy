'use client';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { ITotalVideos } from '@/lib/getVideos';
import { useRouter } from 'next/navigation';
import { IPlaylists } from '@/lib/getPlaylists';
import React from 'react';

interface CardProps {
  apiData: ITotalVideos | IPlaylists | undefined;
  className?: string;
  text: string;
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false);
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
    case 'playlists':
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
        <h1 className='font-Druk text-4xl tracking-wide'>
          {props.text.toUpperCase()}{' '}
        </h1>
        <button className='rounded-xl bg-[#404040] px-4 py-2'>Voir tout</button>
      </div>
      {breadcrumbs && (
        <div className='flex'>
          <span className='rounded-3xl border bg-[#404040] px-4 py-2'>
            2013-15-12
          </span>{' '}
        </div>
      )}
      <div className='flex h-96 gap-20 overflow-x-scroll'>
        {props.apiData?.data?.slice(0, 5).map((item) => {
          return (
            <div className='flex flex-col justify-between border'>
              <div className='flex h-[60%] w-[30rem] border'>
                {item?.youtube_id && (
                  <YouTube
                    videoId={item.youtube_id.toString()}
                    onReady={() => setIsLoading(false)}
                    className={isLoading ? 'hidden' : ''}
                    loading='lazy'
                  />
                )}
              </div>
              <h1 className='font-bold'>{item.title}</h1>
              {props.variant === 'playlists' &&
                'video' in item &&
                Array.isArray(item.video) && (
                  <h2 className='oldGrey text-sm tracking-wide'>
                    {item.video.length} vidéos{' '}
                  </h2>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
