'use client';

import React from 'react';
import { Logo } from './logo';
import { TextLink } from './link';
import { Links } from './links';
import { Button } from './button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 ${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } transition-colors duration-[3000ms] ease-in-out`}
    >
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
    </div>
  );
};
