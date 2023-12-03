'use client';

import usePlaylistCover from '@/hooks/usePlaylistCover';
import { IPlaylists } from '@/types';
import { strings } from '@/utils/strings';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PlaylistWrapperProps {
  data: IPlaylists;
}

export const PlaylistWrapper: React.FC<PlaylistWrapperProps> = ({ data }) => {
  const [selectedPlaylist, setSelectedPlaylist] = React.useState<number | null>(
    null
  );

  const playlistToDisplay = data?.data?.find((x) => x.id === selectedPlaylist);

  const coverUrl = usePlaylistCover(playlistToDisplay?.cover);

  return (

    <div className='mx-auto mt-32 flex w-[90%] flex-col items-center gap-10 shadow-2xl shadow-black  md:h-[650px] md:flex-row md:justify-around md:gap-0 2xl:h-[800px]'>
      <div className=' no-scrollbar h-[140px] space-y-2 overflow-y-scroll  text-center font-Druk md:h-[535px] md:space-y-10 md:text-start '>
        <h1 className='pb-4 text-3xl md:text-2xl'>
          {strings.playlists.page.toUpperCase()}
        </h1>
        {data?.data?.map((item) => {
          const { id, title } = item;
          return (
            <h2
              className='oldGrey z-20 cursor-pointer text-2xl tracking-wide duration-700 hover:scale-75 hover:text-white md:text-4xl'
              key={id}
              onMouseEnter={() => setSelectedPlaylist(item.id)}
            >
              {title.toUpperCase()}
            </h2>
          );
        })}
      </div>
      <div className='playlist-section flex flex-col justify-between px-12 md:h-[535px] md:px-0 '>
        {playlistToDisplay ? (
          <>
            <div className='relative mb-2 flex h-[250px] rounded-lg md:h-72 md:w-[30rem]'>
              <Image
                src={coverUrl}
                fill
                alt='playlist-cover'
                className='rounded-2xl border-2 border-pink-500'
              />{' '}
              <div className='absolute bottom-[7.2rem] right-6 -z-20 h-40 w-[22rem] rounded-2xl bg-[#4c4c4d]/40 md:bottom-8 md:right-8 md:h-72  md:w-[26rem]'></div>
              <div className='absolute bottom-[6rem] right-2 -z-10 mx-auto mb-2 h-40 w-[24rem] rounded-2xl bg-[#4c4c4d] md:bottom-2 md:right-4 md:h-72  md:w-[28rem]'></div>{' '}
            </div>{' '}
            <h1 className='font-Druk text-3xl font-bold'>
              {playlistToDisplay?.title.toUpperCase()}
            </h1>
            {Array.isArray(playlistToDisplay?.video) ? (
              <h2 className='oldGrey text-sm tracking-wide'>
                {playlistToDisplay?.video.length} vidéo
                {playlistToDisplay?.video.length !== 1 && 's'}
              </h2>
            ) : (
              <h2></h2>
            )}
            <div className='flex h-24'>
              <p
                dangerouslySetInnerHTML={{
                  __html: marked(playlistToDisplay?.description || ''),
                }}
                className='truncate whitespace-normal'
              />
            </div>
            <div className='mt-4'>
              <Link
                href={`/playlists/${playlistToDisplay.id}`}
                className='mt-2 rounded-xl bg-[#616162]/70 px-4 py-3 text-center font-bold text-white shadow-md shadow-black duration-500  hover:shadow-sm hover:shadow-pink-400'
              >
                Voir la Playlist
              </Link>
            </div>
          </>
        ) : (
          <div className='borde mt-12 flex h-full items-center text-center  md:mt-0'>
            <h1 className='font-Druk tracking-widest text-pink-400 md:text-4xl'>
              {strings.playlists.waitingForHover.toUpperCase()}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
