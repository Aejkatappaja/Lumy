'use client';

import React from 'react';
import { Logo } from './logo';
import { TextLink } from './link';
import { Links } from './links';
import { Button } from './button';

export const Header: React.FC = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateOpacity = () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const opacity = Math.min(scrollPosition / maxScroll, 1);
    return opacity;
  };

  return (
    <div
      className='fixed left-0 right-0 top-0 z-50 transition-opacity duration-300 ease-in-out'
      style={{ backgroundColor: `rgba(0, 0, 0, ${calculateOpacity()})` }}
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
