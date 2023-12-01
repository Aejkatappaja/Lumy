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
    <div className='mx-auto mt-8 flex w-[80%] items-center  border shadow-2xl shadow-black'>
      <div className=' no-scrollbar h-[535px] space-y-8 overflow-y-scroll font-Druk'>
        <h1 className='pb-4 text-2xl'>
          {strings.playlists.page.toUpperCase()}
        </h1>
        {data?.data?.map((item) => {
          return (
            <h2 className=' oldGrey z-20 cursor-pointer text-4xl tracking-wide duration-700 hover:scale-75 hover:text-white'>
              {item.title.toUpperCase()}
            </h2>
          );
        })}
      </div>
      <div className='playlist-section border'></div>
    </div>
  );
}
