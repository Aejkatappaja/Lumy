'use client';

import React from 'react';
import { Logo } from './logo';
import { TextLink } from './link';
import { Links } from './links';
import { Button } from './button';
import useScrollOpacity from '@/hooks/useScrollOpacity';

export const Header: React.FC = () => {
  const opacity = useScrollOpacity();

  return (
    <div
      className='fixed left-0 right-0 top-0 z-50 transition-opacity duration-300 ease-in-out'
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      <div className='flex h-[86px] items-center justify-between px-14'>
        <nav className='space-x-6'>
          {Links.map((link) => {
            const { href, title } = link;
            return <TextLink key={title} href={href} title={title} />;
          })}
        </nav>
        <Logo />
        <Button />
      </div>
    </div>
  );
};
