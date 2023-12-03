'use client';

import ReactPlayer from 'react-player/lazy';

import React from 'react';
import Image from 'next/image';
import { Waves } from '@/utils/waves';
import { formatNumber } from '@/utils/format-number';
import { timeSincePublishedVideo } from '@/utils/time-difference';
import Link from 'next/link';
import usePlaylistCover from '@/hooks/usePlaylistCover';
import { IPlaylists, ITotalVideos } from '@/types';

interface CardProps {
  apiData: ITotalVideos | IPlaylists | undefined;
  text: string;
  variant?: string;
}

export const Card: React.FC<CardProps> = ({ apiData, text, variant }) => {
  let number: number;
  const threeLastVideos = variant === 'threeLastVideos';
  const mostViewedVideos = variant === 'mostViewed';
  const lastReplays = variant === 'lastReplays';
  const allOurPlaylists = variant === 'playlists';

  if (threeLastVideos) {
    number = 3;
  } else if (mostViewedVideos) {
    number = 8;
  } else number = 100;

  // const [hoverStates, setHoverStates] = React.useState<{
  //   [key: string]: boolean;
  // }>({});

  // const handleMouseEnter = (id: string) => {
  //   setHoverStates((prevStates) => ({ ...prevStates, [id]: true }));
  // };

  // const handleMouseLeave = (id: string) => {
  //   setHoverStates((prevStates) => ({ ...prevStates, [id]: false }));
  // };

  return (
    <div className='z-10 flex w-full flex-col space-y-6'>
      {lastReplays && <Waves />}
      <div className='flex justify-between pr-12 font-bold'>
        <h1 className='font-Druk text-4xl tracking-wide'>
          {text.toUpperCase()}
        </h1>
        {!threeLastVideos && (
          <Link
            href={allOurPlaylists ? '/playlists' : ''}
            className='rounded-xl bg-[#404040] px-4 py-2 duration-500 hover:scale-105 hover:shadow-sm hover:shadow-pink-400'
          >
            Voir tout
          </Link>
        )}
      </div>
      {/* {breadcrumbs && (
        <div className='flex'>
          <span className='rounded-3xl bg-[#404040] px-4 py-2'>2013-15-12</span>
        </div>
      )} */}
      <div className='flex h-96 gap-8 overflow-x-scroll'>
        {apiData?.data?.slice(0, number).map((item) => {
          const coverUrl = usePlaylistCover(item?.cover);
          const id = item?.youtube_id?.toString();
          const views = formatNumber(item?.view_count);
          const time = timeSincePublishedVideo(item?.date_published);

          // const url = `https://www.youtube.com/watch?v=${id}`;
          return (
            <Link
              className='relative flex flex-col gap-2 '
              key={id}
              href={allOurPlaylists ? `/playlists` : `/video/${item.id}`}
            >
              <div
                className={
                  mostViewedVideos
                    ? 'flex h-[80%] w-[24rem] flex-col'
                    : lastReplays
                      ? 'flex h-[60%] w-[20rem]'
                      : allOurPlaylists
                        ? 'flex h-[100%] w-[30rem] flex-col'
                        : 'flex h-[80%] w-[34rem]'
                }
              >
                {mostViewedVideos && (
                  <div className='-z-30 flex h-24 w-full  border-white'></div>
                )}
                {allOurPlaylists && (
                  <div className='-z-30 flex h-24 w-full border-white '></div>
                )}
                {item?.youtube_id && (
                  <div
                    className={`'no-scrollbar z-60 hover:z-100 relative flex h-full w-full rounded-2xl border-2 border-white/20 bg-gray-600 duration-500 ${
                      !(mostViewedVideos || allOurPlaylists) &&
                      'hover:translate-x-2'
                    } hover:border-pink-400 hover:shadow-md hover:shadow-pink-400 `}
                    // onMouseEnter={() => handleMouseEnter(id)}
                    // onMouseLeave={() => handleMouseLeave(id)}
                  >
                    {/* <ReactPlayer
                        url={url}
                        style={{ position: 'absolute', top: 20, left: 0 }}
                        width='100%'
                        height='85%'
                        playing={hoverStates[id]}
                        volume={0}
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
                      /> */}
                    <Image
                      src={coverUrl}
                      fill
                      alt='image'
                      className=' rounded-2xl'
                      loading='lazy'
                    ></Image>
                    {mostViewedVideos && (
                      <div className='myclass absolute -top-[4rem] -z-10 flex h-24 w-full items-start justify-start  bg-gradient-to-b from-black from-15% to-[#9e2170] to-80% pl-2 font-Druk text-5xl tracking-widest text-black text-opacity-90'>
                        {formatNumber(item.view_count)}K
                      </div>
                    )}
                    {allOurPlaylists && (
                      <>
                        <div className='absolute bottom-8 right-6 -z-20 h-60 w-[27rem] rounded-2xl  bg-[#4c4c4d]/40'></div>
                        <div className='absolute bottom-3 right-2 -z-10 mx-auto mb-2 h-60 w-[29rem] rounded-2xl  bg-[#4c4c4d]'></div>{' '}
                      </>
                    )}
                  </div>
                )}
              </div>
              <div className='space-y-2'>
                <h1 className='pl-2 font-bold'>{item.title}</h1>{' '}
                {item.date_published && (
                  <h1 className='oldGrey pl-2 text-sm tracking-wide'>
                    Il y a {time} jours
                  </h1>
                )}
                {allOurPlaylists &&
                'video' in item &&
                Array.isArray(item.video) ? (
                  <h2 className='oldGrey pl-2 text-sm tracking-wide'>
                    {item.video.length} vidéos{' '}
                  </h2>
                ) : (
                  <h2></h2>
                )}
              </div>
            </Link>
          );
        })}{' '}
      </div>{' '}
    </div>
  );
};
