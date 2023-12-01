import { getPlayList } from '@/lib/getPlaylists';
import { strings } from '@/utils/strings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBH | Playlists',
  description: 'BBH Videos Playlists',
};

export default async function Playlist() {
  const data = await getPlayList();

  return (
    <div className='mx-auto mt-8 flex w-[80%] items-center  border'>
      <div className='playlist-section font-Druk h-[535px] space-y-4 overflow-y-scroll border '>
        <h1 className='pb-4 text-2xl'>{strings.playlists.all}</h1>
        {data?.data?.map((item) => {
          return <h2 className='text-4xl'>{item.title.toUpperCase()}</h2>;
        })}
      </div>
      <div className='playlist-section border'></div>
    </div>
  );
}
