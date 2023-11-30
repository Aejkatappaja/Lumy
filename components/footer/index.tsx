import React from 'react';
import { icons } from './icons';
import Link from 'next/link';
import { strings } from '@/utils/strings';
import { Triskell } from './triskell';

export const CustomFooter: React.FC = () => {
  return (
    <footer className='relative flex h-[428.69px] w-full flex-col items-center justify-center space-y-16 overflow-hidden'>
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
      <Triskell />
    </footer>
  );
};
