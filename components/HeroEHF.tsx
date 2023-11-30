import Image from 'next/image';

export default function HeroEHF() {
  return (
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
      </div>
    </div>
  );
}
