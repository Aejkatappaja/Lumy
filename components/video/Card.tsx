'use client';

import ReactPlayer from 'react-player/lazy';

import { ITotalVideos } from '@/lib/getVideos';

import { IPlaylists } from '@/lib/getPlaylists';
import React from 'react';
import Image from 'next/image';
import { Waves } from '@/utils/waves';
import { formatNumber } from '@/utils/format-number';
import { timeSincePublishedVideo } from '@/utils/time-difference';

interface CardProps {
  apiData: ITotalVideos | IPlaylists | undefined;
  className?: string;
  text: string;
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  let shadowWaves: boolean;
  let breadcrumbs: boolean;
  let pinkStuff: boolean;
  let number;
  switch (props.variant) {
    case 'match':
      breadcrumbs = true;
      shadowWaves = false;
      pinkStuff = false;
      break;
    case 'lastReplays':
      breadcrumbs = false;
      shadowWaves = true;
      pinkStuff = false;
      break;
    case 'playlists':
      breadcrumbs = false;
      shadowWaves = false;
      pinkStuff = false;
      break;
    case 'mostViewed':
      breadcrumbs = false;
      shadowWaves = false;
      pinkStuff = true;
      break;
    case 'threeLastvideos':
      breadcrumbs = false;
      shadowWaves = false;
      pinkStuff = false;
      number = 3;
      break;
    default:
      breadcrumbs = false;
      shadowWaves = false;
      number = 5;
      break;
  }

  return (
    <div className='z-10 flex w-full flex-col space-y-6'>
      {shadowWaves && <Waves />}
      <div className='flex justify-between pr-12 font-bold'>
        <h1 className='font-Druk text-4xl tracking-wide'>
          {props.text.toUpperCase()}
        </h1>
        {props.variant !== 'threeLastVideos' && (
          <button className='rounded-xl bg-[#404040] px-4 py-2'>
            Voir tout
          </button>
        )}
      </div>
      {breadcrumbs && (
        <div className='flex'>
          <span className='rounded-3xl border bg-[#404040] px-4 py-2'>
            2013-15-12
          </span>
        </div>
      )}
      <div className='flex h-96 gap-8 overflow-x-scroll'>
        {props.apiData?.data?.slice(0, number).map((item) => {
          const id = item.youtube_id.toString();
          const url = `https://www.youtube.com/watch?v=${id}`;
          return (
            <div className='relative flex flex-col justify-between' key={id}>
              {' '}
              <div
                className={
                  pinkStuff
                    ? 'flex h-[80%] w-[24rem] flex-col justify-between '
                    : props.variant === 'lastReplays'
                      ? 'flex h-[60%] w-[20rem] '
                      : 'flex h-[80%] w-[34rem] '
                }
              >
                {' '}
                {pinkStuff && (
                  <div className=' myclass text-blackt z-10 flex h-24 w-full items-start  justify-start bg-gradient-to-b from-black from-15% via-[#9e2170] via-70% to-black to-25% pl-2 font-Druk text-5xl tracking-widest text-black text-opacity-80'>
                    {formatNumber(item.view_count)}K
                  </div>
                )}
                {props.variant !== 'playlists' ? (
                  item?.youtube_id && (
                    <div className='no-scrollbar relative flex h-full w-full rounded-2xl border-2 border-white/20 bg-white/20 duration-500 hover:translate-x-2 hover:border-pink-400 hover:shadow-md hover:shadow-pink-400'>
                      <ReactPlayer
                        url={url}
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
                  <div className='no-scrollbar relative flex h-full w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/20  duration-500 hover:border-pink-400 hover:shadow-md hover:shadow-pink-400'>
                    <Image
                      src='/images/playlist-alt.jpeg'
                      fill
                      alt='playlist_cover'
                      className='object-cover py-6'
                    />
                  </div>
                )}
              </div>{' '}
              <h1 className='pl-2 font-bold'>{item.title}</h1>{' '}
              {item.date_published && (
                <h1 className='oldGrey pl-2 text-sm tracking-wide'>
                  Il y a {timeSincePublishedVideo(item.date_published)} jours
                </h1>
              )}
              {props.variant === 'playlists' &&
              'video' in item &&
              Array.isArray(item.video) ? (
                <h2 className='oldGrey pl-2 text-sm tracking-wide'>
                  {item.video.length} vidéos{' '}
                </h2>
              ) : (
                <h2></h2>
              )}
            </div>
          );
        })}{' '}
      </div>{' '}
    </div>
  );
};
