import { HeroData } from '@/utils/hero-data';
import Image from 'next/image';

export default function HeroEHF() {
  return (
    <div className='flex w-full flex-col space-y-4'>
      <div className=' h-[483px] w-[96%] rounded-2xl bg-[#001131] '>
        <div className='relative flex h-[214px] flex-col'>
          <Image
            src='/images/bandeau_ehf_champions_league.jpg'
            fill
            alt='bandeau_ehf_champions_league'
            className='rounded-t-2xl'
          />{' '}
        </div>
        <div className=' flex  overflow-scroll px-4 py-4'>
          {HeroData.map((item, index) => (
            <div key={index} className='mx-auto flex flex-col gap-2 '>
              <div className='relative h-48 w-80'>
                <Image
                  src='/images/ehf-players.jpeg'
                  fill
                  alt='stadium'
                  className=' rounded-2xl border-2 object-cover duration-500 hover:rotate-2'
                />
              </div>
              <div>
                <h1 className='pl-2 font-bold'>{item.title}</h1>
                <h2 className='oldGrey pl-2 text-sm tracking-wide'>
                  {item.since}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
