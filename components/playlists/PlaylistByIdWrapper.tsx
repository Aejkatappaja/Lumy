'use client';

import React from 'react';
import { GoBackButton } from './GoBackButton';
import Image from 'next/image';
import { marked } from 'marked';
import { formatNumber } from '@/utils/format-number';
import Card from './Card';
import usePlaylistCover from '@/hooks/usePlaylistCover';
import useTotalViews from '@/hooks/useTotalViews';
import { IPlaylists } from '@/types';
interface PlaylistByIdWrapperProps {
  data: IPlaylists;
}

export const PlaylistByIdWrapper: React.FC<PlaylistByIdWrapperProps> = ({
  data,
}) => {
  const playlistId = data?.data[0]?.id.toString();
  const { totalViews, videos } = useTotalViews(playlistId);
  const coverUrl = usePlaylistCover(data?.data[0]?.cover);

  return (
    <div className='mx-auto mt-32 flex w-[90%] flex-col md:px-8'>
      <div>
        <GoBackButton />
      </div>
      <div className='mt-10 flex flex-col md:flex-row '>
        <div className='flex flex-col gap-6 '>
          <div className='flex items-center space-x-6'>
            <h1 className='font-Druk text-3xl font-bold'>
              {data?.data[0].title.toUpperCase()}
            </h1>
            <h2 className='oldGrey text-sm tracking-wide'>
              {totalViews && totalViews >= 1000
                ? `${formatNumber(totalViews)}k vues`
                : `${formatNumber(totalViews)} vues`}
            </h2>
          </div>
          <div className='flex h-[10.5rem] '>
            <p
              dangerouslySetInnerHTML={{
                __html: marked(data?.data[0]?.description || ''),
              }}
              className='truncate whitespace-normal'
            />
          </div>
        </div>
        <div className='relative mb-2 mt-6 flex h-72 rounded-lg md:mt-0 md:w-[63rem]'>
          <Image
            src={coverUrl}
            fill
            alt='playlist-cover'
            className='rounded-2xl border-2 border-white'
          />{' '}
        </div>{' '}
      </div>
      <div className=''>
        <h3 className='oldGrey text-sm tracking-wide'>
          {videos?.data && videos?.data.length > 1
            ? `${videos?.data.length} vidéos`
            : `${videos?.data.length} vidéo`}
        </h3>
        <div className='mt-8 flex flex-col'>
          {videos?.data?.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
