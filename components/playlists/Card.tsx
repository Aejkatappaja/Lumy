import { marked } from 'marked';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import usePlaylistCover from '@/hooks/usePlaylistCover';
import { IVideos } from '@/types';
import { HandThumbUpIcon, EyeIcon } from '@heroicons/react/20/solid';
import { timeSincePublishedVideo } from '@/utils/time-difference';
import { formatNumber } from '@/utils/format-number';

interface CardProps {
  item: IVideos;
}

export default function Card({ item }: CardProps) {
  const {
    id,
    description,
    cover,
    title,
    like_count,
    date_published,
    view_count,
  } = item;
  const coverUrl = usePlaylistCover(cover);
  return (
    <div
      key={id}
      className='flex w-full flex-col-reverse items-center justify-between border-t border-gray-400 py-3 md:h-80 md:flex-row md:justify-normal'
    >
      <div className='relative h-40 w-full md:h-[90%] md:w-1/3'>
        <Image
          src={coverUrl}
          fill
          alt='picture'
          className='rounded-xl border'
        />
      </div>
      <div className='h-[90%] flex-col px-2 md:max-w-[50%] md:space-y-3  md:px-8'>
        <div className='flex justify-between'>
          <h1 className='truncate font-Druk text-xl font-bold tracking-wide md:text-3xl'>
            {title}
          </h1>
          <div className=' md:hidden '>
            <Link
              href={`/video/${id}`}
              className='rounded-xl bg-[#616162]/70 px-4 py-1 text-center font-semibold text-white shadow-md shadow-black active:translate-x-1'
            >
              Voir la vidéo &gt;
            </Link>
          </div>
        </div>

        <div className='flex w-full gap-2 text-xs md:gap-4 md:text-sm'>
          <h2 className='oldGrey  tracking-wide'>
            Il y a {timeSincePublishedVideo(date_published)} jours
          </h2>
          <div className='oldGrey flex items-center md:tracking-wide'>
            <EyeIcon className='mr-2 w-4' />
            <h2>
              {view_count && view_count >= 1000
                ? `${formatNumber(view_count)}k vues`
                : `${formatNumber(view_count)} vues`}
            </h2>
          </div>
          <div className='oldGrey flex items-center  tracking-wide'>
            <HandThumbUpIcon className='mr-2 w-4' />
            <h2>{like_count} j'aimes</h2>
          </div>
        </div>
        <div className='flex h-[3rem] pb-2 md:h-[6.5rem] '>
          <p
            dangerouslySetInnerHTML={{
              __html: marked(description || ''),
            }}
            className='truncate whitespace-normal text-sm'
          />
        </div>
        <div className='mt-4 hidden md:block'>
          <Link
            href={`/video/${id}`}
            className='rounded-xl bg-[#616162]/70 px-4 py-2 text-center font-semibold text-white shadow-md shadow-black active:translate-x-1'
          >
            Voir la vidéo &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
