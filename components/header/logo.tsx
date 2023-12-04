import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <>
      <Link
        href={`https://www.brest-bretagnehandball.fr/`}
        target='_blank'
        className='md:hidden'
      >
        <Image
          src='/images/logo_bbh.svg'
          height={62}
          width={47}
          alt='bbh-logo'
          className='animate-pulse'
        />
      </Link>
      <Image
        src='/images/logo_bbh.svg'
        height={62}
        width={47}
        alt='bbh-logo'
        className='hidden animate-pulse md:block'
      />
    </>
  );
};
