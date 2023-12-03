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
    <div className='mx-auto mt-32 flex w-[90%] items-center justify-around  shadow-2xl shadow-black'>
      <div className=' no-scrollbar h-[535px] space-y-10 overflow-y-scroll font-Druk '>
        <h1 className='pb-4 text-2xl'>
          {strings.playlists.page.toUpperCase()}
        </h1>
        {data?.data?.map((item) => {
          const { id, title } = item;
          return (
            <h2
              className=' oldGrey z-20 cursor-pointer text-4xl tracking-wide duration-700 hover:scale-75 hover:text-white'
              key={id}
              onMouseEnter={() => setSelectedPlaylist(item.id)}
            >
              {title.toUpperCase()}
            </h2>
          );
        })}
      </div>
      <div className='playlist-section flex h-[535px] flex-col justify-between '>
        {playlistToDisplay ? (
          <>
            <div className='relative mb-2 flex h-72 w-[30rem] rounded-lg'>
              <Image
                src={coverUrl}
                fill
                alt='playlist-cover'
                className='rounded-2xl border-2 border-pink-500'
              />{' '}
              <div className='absolute bottom-8 right-8 -z-20 h-72 w-[26rem] rounded-2xl  bg-[#4c4c4d]/40'></div>
              <div className='absolute bottom-2 right-4 -z-10 mx-auto mb-2 h-72 w-[28rem] rounded-2xl  bg-[#4c4c4d]'></div>{' '}
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
          <div className='flex h-full items-center  text-center'>
            <h1 className='font-Druk text-4xl tracking-widest text-pink-400'>
              {strings.playlists.waitingForHover.toUpperCase()}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
