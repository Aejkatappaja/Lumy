import React from 'react';
import { Logo } from './logo';
import { TextLink } from './link';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className='flex h-[86px] items-center border px-8'>
      <TextLink />
      <Logo />
    </div>
  );
};
