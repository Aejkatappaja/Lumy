import React from 'react';
import Link from 'next/link';

interface TextLinkProps {
  title: string;
  href: string;
}

export const TextLink: React.FC<TextLinkProps> = ({ ...props }) => {
  return (
    <Link href={props.href} className='font-bold'>
      {props.title}
    </Link>
  );
};
