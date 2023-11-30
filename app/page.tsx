'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useFetch } from '@/hooks/customs/useFetch';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/video/Card';

export default function Home() {
  const router = useRouter();
  const lastPublished = true;
  const response = useFetch();
  const { apiData } = response;
  console.log(response, 'data');

  return (
    <main className='flex min-h-screen flex-col items-center justify-between gap-14 pl-12 pt-20'>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='flex h-96 w-full border'
      >
        {apiData?.data?.map((item) => {
          return (
            <SwiperSlide key={item.title} className='h-96 w-1/2 border'>
              <h1 key={item.title}> {item.title}</h1>
            </SwiperSlide>
          );
        })}
      </Swiper>{' '}
      <Card apiData={apiData} text='Derniers Replays' />
      <Card apiData={apiData} text='retour sur les matchs' variant='match' />
      <div className='flex w-full flex-col space-y-4'>
        <div className='mt-5 h-[483px] w-[96%] rounded-2xl bg-[#001131] '>
          <div className=' relative flex h-[214px] flex-col '>
            <Image
              src='/images/bandeau_ehf_champions_league.jpg'
              fill
              alt='bandeau_ehf_champions_league'
              className='rounded-t-2xl '
            />{' '}
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className=' h-[232px] w-[96%] flex-1 border'
          >
            {apiData?.data?.map((item) => {
              return (
                <SwiperSlide key={item.title} className='h-full w-1/2 border'>
                  <div className='h-[70%] w-full border'>x</div>
                  <h1 key={item.title}> {item.title}</h1>
                </SwiperSlide>
              );
            })}
          </Swiper>{' '}
        </div>
      </div>
      <div className='flex w-full flex-col space-y-4'>
        <h1 className='border text-3xl font-bold'>LES PLUS REGARDES</h1>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='flex h-96 w-full border'
        >
          {apiData?.data?.map((item) => {
            return (
              <SwiperSlide key={item.title} className='h-96 w-1/2 border'>
                <h1 key={item.title}> {item.title}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>{' '}
      </div>{' '}
      <div className='flex w-full flex-col space-y-4'>
        <h1 className='border text-3xl font-bold'>TOUTES NOS PLAYLISTS</h1>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='flex h-96 w-full border'
        >
          {apiData?.data?.map((item) => {
            return (
              <SwiperSlide key={item.title} className='h-96 w-1/2 border'>
                <h1 key={item.title}> {item.title}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>{' '}
      </div>{' '}
    </main>
  );
}
