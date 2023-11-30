import React from 'react';
import { icons } from './icons';
import Image from 'next/image';
import Link from 'next/link';
import { strings } from '@/utils/strings';

interface FooterProps {}

export const CustomFooter: React.FC<FooterProps> = ({}) => {
  return (
    <footer className='flex h-[428.69px] w-full flex-col items-center justify-center space-y-16 border'>
      <nav className='flex gap-[56px]'>
        {icons.map((item) => {
          return (
            <Link href={item.href} target='_blank'>
              <img src={item.icon} alt='' />
            </Link>
          );
        })}
      </nav>
      <Link href='https://lumy.bzh/' target='_blank'>
        <img src='/images/logo_lumy.svg' alt='' />
      </Link>
      <nav className='space-x-[18px] font-normal text-[#7E7A7B]'>
        <Link href='#'>{strings.footer.legals}</Link>
        <Link href='#'>{strings.footer.website}</Link>
      </nav>
    </footer>
  );
};
