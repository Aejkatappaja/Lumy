import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
  title: string;
  href: string;
}

export const TextLink: React.FC<TextLinkProps> = ({ ...props }) => {
  return (
    <Link
      href={props.href}
      className='font-bold duration-700 hover:text-pink-400'
    >
      {props.title}
    </Link>
  );
};
