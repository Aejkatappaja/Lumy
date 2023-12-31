'use client';

import { getVideosList } from '@/lib/getVideos';
import { Text } from '@/components/video/Text';
import { formatNumber } from '@/utils/format-number';
import { marked } from 'marked';
import { Card } from './video/Card';
import { getLastVideos } from '@/lib/getLastVideos';
import YouTube from 'react-youtube';

export default async function GetVideoById({ id }: { id: string }) {
  const data = await getVideosList({ id });
  const moreVideos = await getLastVideos();
  const ytId = data?.data[0]?.youtube_id.toString();

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='mt-32 flex h-full flex-col'>
      <div className='h-[15rem] px-2 md:h-[681px] md:px-20'>
        {' '}
        <div className='no-scrollbar relative flex h-full w-full items-center justify-center rounded-2xl border-2 border-white/20 bg-white/20 duration-500 hover:border-pink-400 hover:shadow-md hover:shadow-pink-400 '>
          {data?.data[0]?.youtube_id && (
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${ytId}`}
              title='YouTube BBH Player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              style={{ borderRadius: '20px' }}
            ></iframe>
            // <YouTube videoId={ytId} opts={opts} />
          )}
        </div>
      </div>
      <div className='flex items-center justify-center pt-6 md:mt-12 '>
        <section className='flex w-full flex-col gap-[34px] px-2 md:w-fit '>
          <h1 className='truncate text-3xl font-bold md:text-5xl'>
            {data?.data[0]?.title.toUpperCase()}
          </h1>{' '}
          <Text text='Il y a 3 jours' />
          <p
            dangerouslySetInnerHTML={{
              __html: marked(data?.data[0]?.description || ''),
            }}
          />
          <div className='flex space-x-6'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold'>
                {data?.data[0]?.view_count !== undefined
                  ? data?.data[0]?.view_count >= 1000
                    ? formatNumber(data?.data[0]?.view_count) + ' K'
                    : data?.data[0]?.view_count
                  : data?.data[0]?.view_count}
              </h1>
              <Text text='Vues' />
            </div>
            <div className=' border'></div>
            <div className='flex- flex-col'>
              <h1 className=' text-2xl font-bold'>
                {data?.data[0]?.like_count}{' '}
              </h1>
              <Text text="J'aime" />
            </div>
          </div>
        </section>
      </div>
      <div className='mt-4 w-screen md:mt-12 md:px-10'>
        <Card
          text="d'autres vidéos"
          apiData={moreVideos}
          variant='lastReplays'
        />
      </div>
    </div>
  );
}
