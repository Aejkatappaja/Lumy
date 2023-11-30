import { getVideosList } from '@/lib/getVideos';

export default async function Home() {
  const response = await getVideosList();
  console.log(response, 'data');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 px-6'>
      {response?.data?.map((item) => {
        return <h1 key={item.title}> {item.title}</h1>;
      })}
    </main>
  );
}
