'use client';

import ReactPlayer from 'react-player/lazy';

import { ITotalVideos } from '@/lib/getVideos';

import { IPlaylists } from '@/lib/getPlaylists';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  apiData: ITotalVideos | IPlaylists | undefined;
  className?: string;
  text: string;
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false);

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
      <div className='flex h-96 gap-10 overflow-x-scroll'>
        {props.apiData?.data?.slice(0, 5).map((item) => {
          return (
            <div className='flex flex-col justify-between '>
              <div className=' flex h-[80%] w-[34rem] '>
                {props.variant !== 'playlists' ? (
                  item?.youtube_id && (
                    <div className='no-scrollbar relative flex h-full w-full rounded-2xl border-2 border-white/20 bg-white/20 opacity-30 duration-1000 hover:opacity-100 hover:shadow-md hover:shadow-white/20'>
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${item.youtube_id.toString()}`}
                        style={{ position: 'absolute', top: 20, left: 0 }}
                        width='100%'
                        height='85%'
                        config={{
                          file: {
                            attributes: {
                              style: {
                                height: '100%',
                                objectFit: 'cover',
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  )
                ) : (
                  <div className='no-scrollbar relative flex h-full w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/20 opacity-30 duration-1000 hover:opacity-100 hover:shadow-md hover:shadow-white/20'>
                    <Image
                      src='/images/playlist-alt.jpeg'
                      fill
                      alt='playlist_cover'
                      className='object-cover py-6'
                    />
                  </div>
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
