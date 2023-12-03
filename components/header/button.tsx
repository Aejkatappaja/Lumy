'use client';

import Link from 'next/link';
import React from 'react';

export const Button: React.FC = () => {
  return (
    <Link
      className='flex space-x-6 rounded-xl  bg-[#616162]/70 px-4 py-3 text-center font-bold text-white shadow-md shadow-black active:translate-x-1'
      href='https://www.brest-bretagnehandball.fr/'
      target='_blank'
    >
      bbh.bzh &gt;
    </Link>
  );
};
