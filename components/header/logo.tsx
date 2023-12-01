import React from 'react';
import Image from 'next/image';

export const Logo: React.FC = () => {
  return (
    <Image
      src='/images/logo_bbh.svg'
      height={62}
      width={47}
      alt='bbh-logo'
      className='animate-pulse'
    />
  );
};
