import React from 'react';
import Image from 'next/image';

export const BlurBackground: React.FC = () => {
  return (
    <div className='absolute top-0 -z-10 h-[40rem] w-full '>
      <Image src='/images/pink-bg.jpeg' fill alt='bg' className='blur-xl' />
    </div>
  );
};
