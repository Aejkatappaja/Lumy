import React from 'react';
import { Logo } from './logo';
import { TextLink } from './link';
import { Links } from './links';
import { Button } from './button';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className='flex h-[86px] items-center justify-between px-14'>
      <nav className='space-x-6'>
        {Links.map((link) => {
          return (
            <TextLink key={link.title} href={link.href} title={link.title} />
          );
        })}
      </nav>
      <Logo />
      <Button />
    </div>
  );
};
