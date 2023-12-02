import { getVideosList } from '@/lib/getVideos';
import { Text } from '@/components/video/Text';
import { formatNumber } from '@/utils/format-number';
import { marked } from 'marked';
import { Card } from './video/Card';
import { getLastVideos } from '@/lib/getLastVideos';

export default async function GetVideoById({ id }: { id: string }) {
  const data = await getVideosList({ id });
  const moreVideos = await getLastVideos();
  const ytId = data?.data[0]?.youtube_id.toString();

  return (
    <div className='mt-32 flex h-full flex-col '>
      <div className='h-[681px] px-20'>
        {' '}
        <div className='no-scrollbar relative flex h-full w-full rounded-2xl border-2 border-white/20 bg-white/20 duration-500 hover:border-pink-400 hover:shadow-md hover:shadow-pink-400 '>
          {data?.data[0]?.youtube_id && (
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${ytId}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              style={{ borderRadius: '20px' }}
            ></iframe>
          )}
        </div>
      </div>
      <div className='mt-12 flex h-[457px] items-center justify-center'>
        <section className='flex w-[768px] flex-col gap-[34px] '>
          <h1 className='truncate text-5xl font-bold'>
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
      <div className='mt-12 w-screen px-10'>
        <Card
          text="d'autres vidéos"
          apiData={moreVideos}
          variant='lastReplays'
        />
      </div>
    </div>
  );
}
